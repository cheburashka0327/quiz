import React from "react";
import { LocalizedQuestion } from "../types";

interface SingleChoiceQuestionProps {
  questionId: string;
  localizedQuestion: LocalizedQuestion;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SingleChoiceQuestion: React.FC<SingleChoiceQuestionProps> = ({
  questionId,
  localizedQuestion,
  value,
  onChange,
}) => {
  return (
    <div className="mb-8">
      <p className="text-xl font-semibold mb-4 text-gray-800">
        {localizedQuestion.question}
      </p>
      {localizedQuestion.options &&
        localizedQuestion.options.map((option, index) => (
          <label key={index} className="flex items-center mb-2 cursor-pointer">
            <input
              type="radio"
              name={questionId}
              value={option}
              checked={value === option}
              required
              onChange={onChange}
              className="form-radio h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
            />
            <span className="ml-3 text-lg text-gray-700">{option}</span>
          </label>
        ))}
    </div>
  );
};

export default SingleChoiceQuestion;
