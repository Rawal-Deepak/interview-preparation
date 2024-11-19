import React, { useState } from "react";
import Ckeditor from "../Ckeditor/ckeditor";
import Select from "react-select";
import remove_logo from "../../assets/images/delete.svg";

function ModifyCodingQuestion() {
  //   const [question, setQuestion] = useState({
  //     title: "",
  //     description: "",
  //     difficulty: "easy",
  //     topics: [],
  //     companyTags: [],
  //     isPremium: false,
  //     rewardPoints: 0,
  //     examples: [],
  //     testCases: [],
  //     constraints: {
  //       minArrayLength: "",
  //       maxArrayLength: "",
  //       maxTimeLimit: "",
  //     },
  //     availableTopics: [
  //       { value: "arrays", label: "Arrays" },
  //       { value: "strings", label: "Strings" },
  //       { value: "hashmaps", label: "Hashmaps" },
  //       { value: "trees", label: "Trees" },
  //       { value: "graphs", label: "Graphs" },
  //     ],
  //     availableCompanies: [
  //       { value: "google", label: "Google" },
  //       { value: "amazon", label: "Amazon" },
  //       { value: "microsoft", label: "Microsoft" },
  //       { value: "apple", label: "Apple" },
  //     ],
  //   });

  //   const [showModal, setShowModal] = useState(false);
  //   const [newTopic, setNewTopic] = useState("");
  //   const [newCompany, setNewCompany] = useState("");

  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setQuestion({
  //       ...question,
  //       [name]: value,
  //     });
  //   };

  //   const handleExampleChange = (index, field, value) => {
  //     const updatedExamples = [...question.examples];
  //     updatedExamples[index][field] = value;
  //     setQuestion({
  //       ...question,
  //       examples: updatedExamples,
  //     });
  //   };

  //   const handleTestCaseChange = (index, field, value) => {
  //     const updatedTestCases = [...question.testCases];
  //     updatedTestCases[index][field] = value;
  //     setQuestion({
  //       ...question,
  //       testCases: updatedTestCases,
  //     });
  //   };

  //   const handleAddExample = () => {
  //     setQuestion({
  //       ...question,
  //       examples: [
  //         ...question.examples,
  //         { input: "", expectedOutput: "", type: "", target: "" },
  //       ],
  //     });
  //   };

  //   const handleAddTestCase = () => {
  //     setQuestion({
  //       ...question,
  //       testCases: [
  //         ...question.testCases,
  //         {
  //           input: "",
  //           expectedOutput: "",
  //           isHidden: false,
  //           type: "",
  //           target: "",
  //         },
  //       ],
  //     });
  //   };

  //   const handleSelectTopics = (selectedOptions) => {
  //     setQuestion({
  //       ...question,
  //       topics: selectedOptions
  //         ? selectedOptions.map((option) => option.value)
  //         : [],
  //     });
  //   };

  //   const handleSelectCompanyTags = (selectedOptions) => {
  //     setQuestion({
  //       ...question,
  //       companyTags: selectedOptions
  //         ? selectedOptions.map((option) => option.value)
  //         : [],
  //     });
  //   };

  //   const handleAddTopic = () => {
  //     if (newTopic.trim()) {
  //       setQuestion({
  //         ...question,
  //         availableTopics: [
  //           ...question.availableTopics,
  //           { value: newTopic.trim(), label: newTopic.trim() },
  //         ],
  //       });
  //       setNewTopic("");
  //     }
  //   };

  //   const handleAddCompany = () => {
  //     if (newCompany.trim()) {
  //       setQuestion({
  //         ...question,
  //         availableCompanies: [
  //           ...question.availableCompanies,
  //           { value: newCompany.trim(), label: newCompany.trim() },
  //         ],
  //       });
  //       setNewCompany("");
  //     }
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(question);
  //     // Submit the question to your backend or handle accordingly
  //   };

  //   return (
  //     <div className="container mx-auto p-8">
  //       <form onSubmit={handleSubmit} className="space-y-6">
  //         {/* Title */}
  //         <div className="flex flex-col">
  //           <label htmlFor="title" className="text-sm font-semibold">
  //             Title
  //           </label>
  //           <input
  //             type="text"
  //             id="title"
  //             name="title"
  //             value={question.title}
  //             onChange={handleInputChange}
  //             className="mt-2 p-2 border border-gray-300 rounded-md"
  //             placeholder="Enter question title"
  //             required
  //           />
  //         </div>

  //         {/* Description */}
  //         <div className="flex flex-col">
  //           <label htmlFor="description" className="text-sm font-semibold">
  //             Description
  //           </label>
  //           <Ckeditor
  //           // editor={ClassicEditor}
  //           // data={question.description}
  //           // onChange={(event, editor) => {
  //           //   setQuestion({
  //           //     ...question,
  //           //     description: editor.getData(),
  //           //   });
  //           // }}
  //           />
  //         </div>

  //         {/* Difficulty */}
  //         <div className="flex flex-col">
  //           <label htmlFor="difficulty" className="text-sm font-semibold">
  //             Difficulty
  //           </label>
  //           <select
  //             id="difficulty"
  //             name="difficulty"
  //             value={question.difficulty}
  //             onChange={handleInputChange}
  //             className="mt-2 p-2 border border-gray-300 rounded-md"
  //           >
  //             <option value="easy">Easy</option>
  //             <option value="medium">Medium</option>
  //             <option value="hard">Hard</option>
  //           </select>
  //         </div>

  //         {/* Topics */}
  //         <div className="flex flex-col">
  //           <label htmlFor="topics" className="text-sm font-semibold">
  //             Topics
  //           </label>
  //           <p className="text-xs text-gray-500">
  //             Select topics relevant to the question (multiple selection allowed).
  //           </p>
  //           <Select
  //             id="topics"
  //             isMulti
  //             options={question.availableTopics}
  //             value={question.availableTopics.filter((topic) =>
  //               question.topics.includes(topic.value)
  //             )}
  //             onChange={handleSelectTopics}
  //             className="mt-2"
  //             placeholder="Select topics..."
  //           />
  //           <button
  //             type="button"
  //             onClick={() => setShowModal(true)}
  //             className="mt-2 text-sm text-blue-500"
  //           >
  //             Add Topic
  //           </button>
  //         </div>

  //         {/* Company Tags */}
  //         <div className="flex flex-col">
  //           <label htmlFor="companyTags" className="text-sm font-semibold">
  //             Company Tags
  //           </label>
  //           <p className="text-xs text-gray-500">
  //             Select company tags if applicable (multiple selection allowed).
  //           </p>
  //           <Select
  //             id="companyTags"
  //             isMulti
  //             options={question.availableCompanies}
  //             value={question.availableCompanies.filter((company) =>
  //               question.companyTags.includes(company.value)
  //             )}
  //             onChange={handleSelectCompanyTags}
  //             className="mt-2"
  //             placeholder="Select company tags..."
  //           />
  //           <button
  //             type="button"
  //             onClick={() => setShowModal(true)}
  //             className="mt-2 text-sm text-blue-500"
  //           >
  //             Add Company
  //           </button>
  //         </div>

  //         {/* Example Inputs */}
  //         <div className="space-y-4">
  //           <label className="text-sm font-semibold">Examples</label>
  //           {question.examples.map((example, index) => (
  //             <div key={index} className="space-y-2">
  //               <div className="flex flex-col">
  //                 <label>Input</label>
  //                 <input
  //                   type="text"
  //                   value={example.input}
  //                   onChange={(e) =>
  //                     handleExampleChange(index, "input", e.target.value)
  //                   }
  //                   className="p-2 border border-gray-300 rounded-md"
  //                   placeholder="Example input"
  //                 />
  //               </div>
  //               <div className="flex flex-col">
  //                 <label>Expected Output</label>
  //                 <input
  //                   type="text"
  //                   value={example.expectedOutput}
  //                   onChange={(e) =>
  //                     handleExampleChange(index, "expectedOutput", e.target.value)
  //                   }
  //                   className="p-2 border border-gray-300 rounded-md"
  //                   placeholder="Expected output"
  //                 />
  //               </div>
  //               <div className="flex flex-col">
  //                 <label>Type</label>
  //                 <input
  //                   type="text"
  //                   value={example.type}
  //                   onChange={(e) =>
  //                     handleExampleChange(index, "type", e.target.value)
  //                   }
  //                   className="p-2 border border-gray-300 rounded-md"
  //                   placeholder="Type"
  //                 />
  //               </div>
  //               <div className="flex flex-col">
  //                 <label>Target</label>
  //                 <input
  //                   type="text"
  //                   value={example.target}
  //                   onChange={(e) =>
  //                     handleExampleChange(index, "target", e.target.value)
  //                   }
  //                   className="p-2 border border-gray-300 rounded-md"
  //                   placeholder="Target"
  //                 />
  //               </div>
  //             </div>
  //           ))}
  //           <button
  //             type="button"
  //             onClick={handleAddExample}
  //             className="text-sm text-blue-500"
  //           >
  //             Add Example
  //           </button>
  //         </div>

  //         {/* Test Cases Inputs */}
  //         <div className="space-y-4">
  //           <label className="text-sm font-semibold">Test Cases</label>
  //           {question.testCases.map((testCase, index) => (
  //             <div key={index} className="space-y-2">
  //               <div className="flex flex-col">
  //                 <label>Input</label>
  //                 <input
  //                   type="text"
  //                   value={testCase.input}
  //                   onChange={(e) =>
  //                     handleTestCaseChange(index, "input", e.target.value)
  //                   }
  //                   className="p-2 border border-gray-300 rounded-md"
  //                   placeholder="Test case input"
  //                 />
  //               </div>
  //               <div className="flex flex-col">
  //                 <label>Expected Output</label>
  //                 <input
  //                   type="text"
  //                   value={testCase.expectedOutput}
  //                   onChange={(e) =>
  //                     handleTestCaseChange(
  //                       index,
  //                       "expectedOutput",
  //                       e.target.value
  //                     )
  //                   }
  //                   className="p-2 border border-gray-300 rounded-md"
  //                   placeholder="Expected output"
  //                 />
  //               </div>
  //               <div className="flex flex-col">
  //                 <label>Type</label>
  //                 <input
  //                   type="text"
  //                   value={testCase.type}
  //                   onChange={(e) =>
  //                     handleTestCaseChange(index, "type", e.target.value)
  //                   }
  //                   className="p-2 border border-gray-300 rounded-md"
  //                   placeholder="Type"
  //                 />
  //               </div>
  //               <div className="flex flex-col">
  //                 <label>Target</label>
  //                 <input
  //                   type="text"
  //                   value={testCase.target}
  //                   onChange={(e) =>
  //                     handleTestCaseChange(index, "target", e.target.value)
  //                   }
  //                   className="p-2 border border-gray-300 rounded-md"
  //                   placeholder="Target"
  //                 />
  //               </div>
  //             </div>
  //           ))}
  //           <button
  //             type="button"
  //             onClick={handleAddTestCase}
  //             className="text-sm text-blue-500"
  //           >
  //             Add Test Case
  //           </button>
  //         </div>

  //         {/* Submit */}
  //         <button
  //           type="submit"
  //           className="w-full p-3 bg-blue-500 text-white rounded-md"
  //         >
  //           Submit Question
  //         </button>
  //       </form>

  //       {/* Modal for Adding Topics or Companies */}
  //       {showModal && (
  //         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
  //           <div className="bg-white p-6 rounded-md shadow-lg space-y-4 w-96">
  //             <h3 className="text-lg font-semibold">Add New Topic or Company</h3>
  //             <div className="flex flex-col space-y-2">
  //               <label>Topic</label>
  //               <input
  //                 type="text"
  //                 value={newTopic}
  //                 onChange={(e) => setNewTopic(e.target.value)}
  //                 className="p-2 border border-gray-300 rounded-md"
  //                 placeholder="Enter new topic"
  //               />
  //               <button
  //                 onClick={handleAddTopic}
  //                 className="mt-2 bg-blue-500 text-white p-2 rounded-md"
  //               >
  //                 Add Topic
  //               </button>
  //             </div>
  //             <div className="flex flex-col space-y-2">
  //               <label>Company</label>
  //               <input
  //                 type="text"
  //                 value={newCompany}
  //                 onChange={(e) => setNewCompany(e.target.value)}
  //                 className="p-2 border border-gray-300 rounded-md"
  //                 placeholder="Enter new company"
  //               />
  //               <button
  //                 onClick={handleAddCompany}
  //                 className="mt-2 bg-blue-500 text-white p-2 rounded-md"
  //               >
  //                 Add Company
  //               </button>
  //             </div>
  //             <button
  //               onClick={() => setShowModal(false)}
  //               className="mt-4 bg-gray-500 text-white p-2 rounded-md"
  //             >
  //               Close
  //             </button>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );
  const [question, setQuestion] = useState({
    title: "",
    description: "",
    difficulty: "easy",
    topics: [],
    companyTags: [],
    isPremium: false,
    rewardPoints: 0,
    examples: [],
    testCases: [],
    constraints: {
      minArrayLength: "",
      maxArrayLength: "",
      maxTimeLimit: "",
    },
    availableTopics: [
      { value: "arrays", label: "Arrays" },
      { value: "strings", label: "Strings" },
      { value: "hashmaps", label: "Hashmaps" },
      { value: "trees", label: "Trees" },
      { value: "graphs", label: "Graphs" },
    ],
    availableCompanies: [
      { value: "google", label: "Google" },
      { value: "amazon", label: "Amazon" },
      { value: "microsoft", label: "Microsoft" },
      { value: "apple", label: "Apple" },
    ],
  });

  const [newTopic, setNewTopic] = useState("");
  const [newCompany, setNewCompany] = useState("");
  const [showTopicModal, setShowTopicModal] = useState(false);
  const [showCompnayModel, setShowCompanyModal] = useState(false);

  // Handle field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestion((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle description change
  const handleDescriptionChange = (event, editor) => {
    setQuestion((prev) => ({
      ...prev,
      description: editor.getData(),
    }));
  };

  // Handle adding new topic
  const handleAddTopic = () => {
    setQuestion((prev) => ({
      ...prev,
      topics: [...prev.topics, newTopic],
    }));
    setNewTopic("");
    setShowTopicModal(false);
  };

  // Handle adding new company
  const handleAddCompany = () => {
    setQuestion((prev) => ({
      ...prev,
      companies: [...prev.companies, newCompany],
    }));
    setNewCompany("");
    setShowCompanyModal(false);
  };

  // Handle adding an example
  const handleAddExample = () => {
    setQuestion((prev) => ({
      ...prev,
      examples: [...prev.examples, { input: "", output: "", inputType: "" }],
    }));
  };

  // Handle adding a test case
  const handleAddTestCase = () => {
    setQuestion((prev) => ({
      ...prev,
      testCases: [
        ...prev.testCases,
        { input: "", expectedOutput: "", inputType: "" },
      ],
    }));
  };

  // Handle removing an example
  const handleRemoveExample = (index) => {
    const updatedExamples = question.examples.filter((_, i) => i !== index);
    setQuestion((prev) => ({
      ...prev,
      examples: updatedExamples,
    }));
  };

  // Handle removing a test case
  const handleRemoveTestCase = (index) => {
    const updatedTestCases = question.testCases.filter((_, i) => i !== index);
    setQuestion((prev) => ({
      ...prev,
      testCases: updatedTestCases,
    }));
  };

  // Handle changes in examples and test cases
  const handleExampleChange = (index, field, value) => {
    const updatedExamples = [...question.examples];
    updatedExamples[index][field] = value;
    setQuestion((prev) => ({
      ...prev,
      examples: updatedExamples,
    }));
  };

  const handleTestCaseChange = (index, field, value) => {
    const updatedTestCases = [...question.testCases];
    updatedTestCases[index][field] = value;
    setQuestion((prev) => ({
      ...prev,
      testCases: updatedTestCases,
    }));
  };

  return (
    <>
      <h2 className="text-lg font-medium mt-4 pl-2">
        Add & Edit Coding Question:
      </h2>
      <form>
        {/* Title */}
        <div className="flex flex-col mt-4 justify-start items-start gap-y-1">
          <label className="text-base pl-1">Question Title:</label>
          <input
            type="text"
            name="title"
            value={question.title}
            onChange={handleChange}
            className="w-96 p-2 rounded-md ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-indigo-600 focus:ring-inset focus:ring-2"
            placeholder="Enter question title"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col mt-4 gap-y-1 justify-start items-start">
          <label className="text-base pl-1">Description:</label>
          <Ckeditor
            // editor={ClassicEditor}
            data={question.description}
            onChange={handleDescriptionChange}
          />
        </div>

        <div className="flex flex-row justify-start gap-x-16">
          {/* Topics */}
          <div className="flex flex-col mt-4 justify-start items-start gap-y-1">
            <label className="text-base pl-1">Topics:</label>
            <Select
              isMulti
              options={question.availableTopics}
              value={question.topics}
              onChange={(selectedOptions) =>
                setQuestion((prev) => ({
                  ...prev,
                  topics: selectedOptions,
                }))
              }
              placeholder="Select topics"
            />
            <button
              type="button"
              onClick={() => setShowTopicModal(true)}
              className="text-sm text-blue-500 pl-1"
            >
              Add Topic
            </button>
          </div>

          {/* Companies */}
          <div className="flex flex-col mt-4 justify-start items-start gap-y-1">
            <label className="text-base pl-1">Companies:</label>
            <Select
              isMulti
              options={question.availableCompanies}
              value={question.companies}
              onChange={(selectedOptions) =>
                setQuestion((prev) => ({
                  ...prev,
                  companies: selectedOptions,
                }))
              }
              placeholder="Select companies"
            />
            <button
              type="button"
              onClick={() => setShowCompanyModal(true)}
              className="text-sm text-blue-500 pl-1"
            >
              Add Company
            </button>
          </div>
        </div>

        {/* Examples */}
        <div className="flex flex-col mt-4 justify-start items-start gap-y-1">
          <label className="text-base pl-1">Examples:</label>
          {question.examples.map((example, index) => (
            <div key={index} className="flex space-x-2 mb-2 items-center">
              <input
                type="text"
                value={example.input}
                onChange={(e) =>
                  handleExampleChange(index, "input", e.target.value)
                }
                className="w-48 p-2 rounded-md ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-indigo-600 focus:ring-inset focus:ring-2"
                placeholder="Input"
              />
              <input
                type="text"
                value={example.output}
                onChange={(e) =>
                  handleExampleChange(index, "output", e.target.value)
                }
                className="w-48 p-2 rounded-md ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-indigo-600 focus:ring-inset focus:ring-2"
                placeholder="Output"
              />
              <select
                value={example.inputType}
                onChange={(e) =>
                  handleExampleChange(index, "inputType", e.target.value)
                }
                className="w-48 h-10 p-2 rounded-md ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-indigo-600 focus:ring-inset focus:ring-2"
              >
                <option value="" className="hidden">
                  Select Input Type
                </option>
                <option value="array">Array</option>
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="boolean">Boolean</option>
              </select>
              <input
                type="text"
                value={example.target}
                onChange={(e) =>
                  handleExampleChange(index, "target", e.target.value)
                }
                className="w-48 p-2 rounded-md ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-indigo-600 focus:ring-inset focus:ring-2"
                placeholder="Target Value"
              />
              <img
                src={remove_logo}
                alt="remove"
                className="w-7 h-7 cursor-pointer"
                onClick={() => handleRemoveExample(index)}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddExample}
            className="px-4 py-2 bg-[#5652B7] text-white rounded-md hover:bg-[#6461BD] shadow-md"
          >
            Add Example
          </button>
        </div>

        {/* Test Cases */}
        <div className="flex flex-col mt-4 justify-start items-start gap-y-1">
          <label className="text-base pl-1">Test Cases</label>
          {question.testCases.map((testCase, index) => (
            <div key={index} className="flex space-x-2 mb-2 items-center">
              <input
                type="text"
                value={testCase.input}
                onChange={(e) =>
                  handleTestCaseChange(index, "input", e.target.value)
                }
                className="w-48 p-2 rounded-md ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-indigo-600 focus:ring-inset focus:ring-2"
                placeholder="Input"
              />
              <input
                type="text"
                value={testCase.expectedOutput}
                onChange={(e) =>
                  handleTestCaseChange(index, "expectedOutput", e.target.value)
                }
                className="w-48 p-2 rounded-md ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-indigo-600 focus:ring-inset focus:ring-2"
                placeholder="Expected Output"
              />
              <select
                value={testCase.inputType}
                onChange={(e) =>
                  handleTestCaseChange(index, "inputType", e.target.value)
                }
                className="w-48 h-10 p-2 rounded-md ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-indigo-600 focus:ring-inset focus:ring-2"
              >
                <option value="" className="hidden">
                  Select Input Type
                </option>
                <option value="array">Array</option>
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="boolean">Boolean</option>
              </select>
              <input
                type="text"
                value={testCase.target}
                onChange={(e) =>
                  handleTestCaseChange(index, "target", e.target.value)
                }
                className="w-48 p-2 rounded-md ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-indigo-600 focus:ring-inset focus:ring-2"
                placeholder="Target Value"
              />
              <input
                type="checkbox"
                value={testCase.isHidden}
                onChange={(e) =>
                  handleTestCaseChange(index, "isHidden", e.target.value)
                }
                className="w-4 h-4"
                id="isHidden"
              />
              <label htmlFor="isHidden">IsHidden</label>
              <img
                src={remove_logo}
                alt="remove"
                className="w-7 h-7 cursor-pointer"
                onClick={() => handleRemoveTestCase(index)}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddTestCase}
            className="px-4 py-2 bg-[#5652B7] text-white rounded-md hover:bg-[#6461BD] shadow-md"
          >
            Add Test Case
          </button>
        </div>

        <div className="flex mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-[#5652B7] text-white rounded-md hover:bg-[#6461BD] shadow-md"
          >
            Save Question
          </button>
        </div>
      </form>

      {/* Modal for Adding Topics */}
      {showTopicModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg space-y-4 w-96">
            <h3 className="text-lg font-semibold">Add New Topic</h3>
            <div className="flex flex-col space-y-2">
              <label>Topic</label>
              <input
                type="text"
                value={newTopic}
                onChange={(e) => setNewTopic(e.target.value)}
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Enter New topic"
              />
              <button
                onClick={handleAddTopic}
                className="px-4 py-2 bg-[#5652B7] text-white rounded-md hover:bg-[#6461BD] shadow-md"
              >
                Add Topic
              </button>
            </div>
            <button
              onClick={() => setShowTopicModal(false)}
              className="mt-4 bg-gray-500 text-white p-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal for Adding Companies */}
      {showCompnayModel && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg space-y-4 w-96">
            <h3 className="text-lg font-semibold">Add New Company</h3>
            <div className="flex flex-col space-y-2">
              <label>Company:</label>
              <input
                type="text"
                value={newTopic}
                onChange={(e) => setNewCompany(e.target.value)}
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Enter New Company Name"
              />
              <button
                onClick={handleAddCompany}
                className="px-4 py-2 bg-[#5652B7] text-white rounded-md hover:bg-[#6461BD] shadow-md"
              >
                Add Company
              </button>
            </div>
            <button
              onClick={() => setShowCompanyModal(false)}
              className="mt-4 bg-gray-500 text-white p-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ModifyCodingQuestion;
