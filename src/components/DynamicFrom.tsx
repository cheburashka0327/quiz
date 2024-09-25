import React, { useState, useEffect } from "react";
import { Language, Question } from "../types";
import SingleChoiceQuestion from "./SingleChoice";
import Popup from "./Popup";
import { useTranslation } from "react-i18next";
import ComparisonQuestion from "./ComparisionQustion";
import formData from "../form.json";

interface DynamicFormProps {
  language: Language;
  userName: string;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ language, userName }) => {
  const [formDataState, setFormDataState] = useState<{ [key: string]: string }>(
    {}
  );
  const [questions, setQuestions] = useState<Question[]>([]);
  const [eventMessage, setEventMessage] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { t } = useTranslation();

  useEffect(() => {
    const fetchQuestions = () => {
      setTimeout(() => {
        setQuestions(formData.questions);
      }, 1000);
    };

    fetchQuestions();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormDataState((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }

    if (window.gtag) {
      window.gtag("event", "answer_selected", {
        event_category: "Question",
        event_label: `${t("question")}: ${name}, ${t("answer")}: ${value}`,
      });
    }

    setEventMessage(`${t("question")} ${name} ${t("answered")}: ${value}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};
    questions.forEach((question) => {
      if (question.type === "single-choice" && !formDataState[question.id]) {
        newErrors[question.id] = t("thisFieldIsRequired");
      }
    });

    setErrors(newErrors);

    const isFormValid = Object.keys(newErrors).length === 0;

    if (isFormValid) {
      if (window.gtag) {
        window.gtag("event", "submit", {
          event_category: "Form",
          event_label: `${t("questionnaireCompleted")}`,
        });

        setEventMessage(`${t("formSubmittedSuccessfully")}`);
      } else {
        console.error("gtag not initialized");
        setEventMessage(`${t("errorGtagNotInitialized")}`);
      }

      setIsSuccess(true);
    } else {
      setIsSuccess(false);
      setEventMessage(`${t("formNotComplete")}`);
    }

    setShowPopup(true);
  };

  const clearPopup = () => {
    setShowPopup(false);
    setEventMessage("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">
        {t("welcome")}, {userName || "User"}!
      </h2>

      {questions.length === 0 ? (
        <p>{t("loading")}...</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white p-6 shadow-md rounded-md"
        >
          {questions.map((question) => {
            const localizedQuestion = question[language];
            return (
              <div key={question.id} className="mb-4">
                {question.type === "single-choice" && (
                  <SingleChoiceQuestion
                    questionId={question.id}
                    localizedQuestion={localizedQuestion}
                    value={formDataState[question.id] || ""}
                    onChange={handleChange}
                  />
                )}

                {question.type === "comparison" && (
                  <ComparisonQuestion
                    localizedQuestion={localizedQuestion}
                    values={formDataState}
                    onChange={handleChange}
                  />
                )}

                {errors[question.id] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[question.id]}
                  </p>
                )}
              </div>
            );
          })}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300 mt-4"
          >
            {t("send")}
          </button>
        </form>
      )}

      {showPopup && (
        <Popup
          message={
            isSuccess
              ? t("formSubmittedSuccessfully")
              : t("formSubmittedUnsuccessfully")
          }
          status={isSuccess}
          clearFunction={clearPopup}
          event={eventMessage}
        />
      )}
    </div>
  );
};

export default DynamicForm;
