export interface OptionPair {
  id: string;
  a: string;
  b: string;
}

export interface LocalizedQuestion {
  question: string;
  options?: string[];
  pairs?: OptionPair[];
}

export interface Question {
  id: string;
  type: string;
  en: LocalizedQuestion;
  et: LocalizedQuestion;
  ru: LocalizedQuestion;
}

export interface FormData {
  questions: Question[];
}

export type Language = "en" | "et" | "ru";
