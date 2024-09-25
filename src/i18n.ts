import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      send: "Send",
      welcome: "Welcome",
      enterName: "Enter name",
      close: "Close",
      question: "Question",
      answer: "Answer",
      answered: "Answered",
      formSubmittedSuccessfully: "Form submitted successfully!",
      errorGtagNotInitialized: "Error: gtag not initialized",
      questionnaireCompleted: "Questionnaire Completed",
      formSubmittedUnsuccessfully: "Form submitted unsuccessfully!",
      start: "Start",
      thisFieldIsRequired: "This field is required",
      formNotComplete: "Form not complete",
    },
  },
  ru: {
    translation: {
      send: "Отправить",
      welcome: "Добро пожаловать",
      enterName: "Введите имя",
      close: "Закрыть",
      question: "Вопрос",
      answer: "Ответ",
      answered: "Отвечено",
      formSubmittedSuccessfully: "Форма успешно отправлена!",
      errorGtagNotInitialized: "Ошибка: gtag не инициализирован",
      questionnaireCompleted: "Анкета завершена",
      formSubmittedUnsuccessfully: "Не удалось отправить форму!",
      start: "Начинаем",
      thisFieldIsRequired: "Это поле обязательно",
      formNotComplete: "Форма не заполнена",
    },
  },
  et: {
    translation: {
      send: "Saada",
      welcome: "Tere tulemast",
      enterName: "Sisesta Nimi",
      close: "Sulgeda",
      question: "Küsimus",
      answer: "Vastus",
      answered: "Vastatud",
      formSubmittedSuccessfully: "Vorm on edukalt esitatud!",
      errorGtagNotInitialized: "Viga: gtag ei ole initsialiseeritud",
      questionnaireCompleted: "Küsimustik lõpetatud",
      formSubmittedUnsuccessfully: "Vormi esitamine ebaõnnestus!",
      start: "alustada",
      thisFieldIsRequired: "See väli on kohustuslik",
      formNotComplete: "Vorm ei ole täidetud",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
