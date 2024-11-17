import React, { useState } from "react";

const TextFieldWithDropdown = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [options] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter dropdown options based on input
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleFocus = () => {
    setIsDropdownVisible(true);
  };

  const handleBlur = () => {
    // Delay hiding to allow option selection
    setTimeout(() => {
      setIsDropdownVisible(false);
    }, 200);
  };

  const handleOptionClick = (option) => {
    setInputValue(option); // Set input value to selected option
    setFilteredOptions(options); // Reset the filtered options
    setIsDropdownVisible(false); // Hide the dropdown
  };

  return (
    <div style={{ position: "relative", width: "300px" }}>
      {/* Text Field */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Type or select..."
        className="w-full p-2 rounded ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-indigo-600 focus:ring-inset focus:ring-2"
        id={props.id}
        name={props.name}
        required
      />

      {/* Dropdown */}
      {isDropdownVisible && filteredOptions.length > 0 && (
        <ul className="absolute top-10 w-full bg-white ring-1 ring-black rounded h-[150px] overflow-y-auto list-none m-0 p-0 z-[1000]">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="p-2 cursor-pointer border-b-[1px] border-[#eee] hover:bg-gray-200"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TextFieldWithDropdown;
