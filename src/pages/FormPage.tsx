import React, { useEffect } from "react";
import { Language } from "../types";

import { useParams } from "react-router-dom";
import DynamicForm from "../components/DynamicFrom";
import i18n from "i18next";

const FormPage: React.FC = () => {
  const [language, setLanguage] = React.useState<Language>("en");
  const { userName } = useParams<{ userName: string }>();
  useEffect(() => {
    const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

    if (!GA_TRACKING_ID) {
      console.error("GA_TRACKING_ID not populated");
      return;
    }

    if (!window.gtag) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      const gtag = (...args: any[]) => {
        window.dataLayer.push(args);
      };
      window.gtag = gtag;

      gtag("js", new Date());
      gtag("config", GA_TRACKING_ID);
    }
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value as Language;
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);

    if (window.gtag) {
      window.gtag("event", "language_change", {
        event_category: "Interaction",
        event_label: `Language changed to ${newLanguage}`,
      });
    }
  };

  return (
    <div className="App min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto mb-6">
        <label
          htmlFor="language-select"
          className="block text-gray-700 font-medium mb-2"
        >
          Choose language:
        </label>
        <select
          id="language-select"
          onChange={handleLanguageChange}
          value={language}
          className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="en">English</option>
          <option value="et">Eesti</option>
          <option value="ru">Русский</option>
        </select>
      </div>
      <DynamicForm
        language={language}
        userName={decodeURIComponent(userName || "")}
      />
    </div>
  );
};

export default FormPage;
