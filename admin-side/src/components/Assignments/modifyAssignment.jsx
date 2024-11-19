import { useState } from "react";
import remove_logo from "../../assets/images/delete.svg";

export default function ModifyAssignment() {
  const [topic, setTopic] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [choiceType, setChoiceType] = useState("single");
  const [difficulty, setDifficulty] = useState("");
  const [options, setOptions] = useState([
    { id: 1, text: "", isCorrect: false },
  ]);

  const handleOptionChange = (id, field, value) => {
    setOptions((prevOptions) =>
      prevOptions.map((opt) =>
        opt.id === id ? { ...opt, [field]: value } : opt
      )
    );
  };

  const addOption = () => {
    setOptions([
      ...options,
      { id: options.length + 1, text: "", isCorrect: false },
    ]);
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const formData = {
  //       topic,
  //       questionText,
  //       difficulty,
  //       options,
  //       tags,
  //       image,
  //     };
  //     console.log("Form Data Submitted:", formData);
  //   };

  return (
    <>
      <h2 className="text-lg font-medium mt-4 pl-2">Add & Edit Question:</h2>
      <div className="flex flex-row items-center gap-x-8">
        {/* category selection */}
        <div className="mt-4 flex flex-col justify-start items-start gap-y-1">
          <label className="pl-1 text-base">Category:</label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-60 p-2 rounded-md ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-indigo-600 focus:ring-inset focus:ring-2"
          >
            <option value="" className="hidden">
              Select Category
            </option>
            <option value="React Hooks">React Hooks</option>
            <option value="State Management">State Management</option>
            <option value="JavaScript Basics">JavaScript Basics</option>
          </select>
        </div>

        {/* sub categoty selection */}
        <div className="mt-4 flex flex-col justify-start items-start gap-y-1">
          <label className="pl-1 text-base">Sub-Category:</label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-60 p-2 rounded-md ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-indigo-600 focus:ring-inset focus:ring-2"
          >
            <option value="" className="hidden">
              Select Sub-Category
            </option>
            <option value="React Hooks">React Hooks</option>
            <option value="State Management">State Management</option>
            <option value="JavaScript Basics">JavaScript Basics</option>
          </select>
        </div>

        {/* Section selection */}
        <div className="mt-4 flex flex-col justify-start items-start gap-y-1">
          <label className="pl-1 text-base">Section:</label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-60 p-2 rounded-md ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-indigo-600 focus:ring-inset focus:ring-2"
          >
            <option value="" className="hidden">
              Select Section
            </option>
            <option value="React Hooks">React Hooks</option>
            <option value="State Management">State Management</option>
            <option value="JavaScript Basics">JavaScript Basics</option>
          </select>
        </div>
      </div>

      {/* Question */}
      <div className="flex flex-col items-start justify-start gap-y-1 mt-4">
        <label className="pl-1 text-base">Question Text:</label>
        <textarea
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          placeholder="Enter the question text"
          className="w-[66%] p-2 rounded-md ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-indigo-600 focus:ring-inset focus:ring-2"
          rows="3"
        />
      </div>

      <div className="flex flex-row items-center gap-x-8">
        {/* Difficulty */}
        <div className="flex flex-col items-start justify-start gap-y-1 mt-4">
          <label className="pl-1 text-base">Difficulty:</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-80 p-2 rounded-md ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-indigo-600 focus:ring-inset focus:ring-2"
          >
            <option value="" className="hidden">
              Select Difficulty:
            </option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Choice  */}
        <div className="flex flex-col items-start justify-start gap-y-1 mt-4">
          <label className="pl-1 text-base">Choice Type:</label>
          <select
            value={choiceType}
            onChange={(e) => setChoiceType(e.target.value)}
            className="w-80 p-2 rounded-md ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-indigo-600 focus:ring-inset focus:ring-2"
          >
            <option value="" className="hidden">
              Select Choice
            </option>
            <option value="single">Single Choice</option>
            <option value="multiple">Multiple Choice</option>
          </select>
        </div>
      </div>

      {/* Multiple Options */}
      <div className="flex flex-col items-start justify-start gap-y-1 mt-4">
        <label className="pl-1 text-base">Options:</label>
        {options.map((opt, index) => (
          <div key={opt.id} className="flex items-center gap-3">
            <input
              type="text"
              value={opt.text}
              onChange={(e) =>
                handleOptionChange(opt.id, "text", e.target.value)
              }
              placeholder={`Option ${index + 1}`}
              className="w-80 p-2 rounded-md ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-indigo-600 focus:ring-inset focus:ring-2"
            />
            <input
              type="checkbox"
              checked={opt.isCorrect}
              onChange={(e) =>
                handleOptionChange(opt.id, "isCorrect", e.target.checked)
              }
              className="h-4 w-4"
            />
            {options.length > 1 && (
              <img
                src={remove_logo}
                alt="remove"
                className="w-6 h-6 cursor-pointer"
                onClick={() =>
                  setOptions(options.filter((o) => o.id !== opt.id))
                }
              />
            )}
          </div>
        ))}
        <button type="button" onClick={addOption} className="text-blue-600">
          + Add Option
        </button>
      </div>

      <div className="flex items-center gap-4 mt-6">
        <button
          type="submit"
          className="px-4 py-2 bg-[#5652B7] text-white rounded-md hover:bg-[#6461BD] shadow-md"
        >
          Save Question
        </button>
      </div>
    </>
  );
}
