import React from "react";
import { LocalizedQuestion } from "../types";

interface ComparisonQuestionProps {
  localizedQuestion: LocalizedQuestion;
  values: { [key: string]: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const formatLabel = (label: string): string => {
  return label
    .replace(/_/g, " ")
    .replace(/\bvs\b/gi, "VS")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};
const ComparisonQuestion: React.FC<ComparisonQuestionProps> = ({
  localizedQuestion,
  values,
  onChange,
}) => {
  return (
    <div className="mb-8">
      <p className="text-xl font-semibold mb-4 text-gray-800">
        {localizedQuestion.question}
      </p>
      {localizedQuestion.pairs &&
        localizedQuestion.pairs.map((pair) => (
          <div key={pair.id} className="mb-6">
            <p className="text-lg font-medium text-gray-700 mb-2">
              {formatLabel(pair.id)}
            </p>
            <div className="flex items-center mb-2">
              <label className="flex items-center cursor-pointer w-full">
                <input
                  type="radio"
                  name={pair.id}
                  value="a"
                  checked={values[pair.id] === "a"}
                  required
                  onChange={onChange}
                  className="form-radio h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                />
                <span className="ml-3 text-gray-700">{pair.a}</span>
              </label>
            </div>
            <div className="flex items-center">
              <label className="flex items-center cursor-pointer w-full">
                <input
                  type="radio"
                  name={pair.id}
                  value="b"
                  checked={values[pair.id] === "b"}
                  required
                  onChange={onChange}
                  className="form-radio h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                />
                <span className="ml-3 text-gray-700">{pair.b}</span>
              </label>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ComparisonQuestion;
