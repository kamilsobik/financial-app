import PropTypes from "prop-types";
import { useState } from "react";

const SharedInput = ({
  placeholder,
  onChange,
  backgroundColor,
  textColor,
  fontSize,
  width,
  height,
  value,
}) => {
  const [inputValue, setInputValue] = useState(value || "");

  const inputStyle = {
    backgroundColor: backgroundColor || "bg-blue-300",
    color: textColor || "text-black",
    fontSize: fontSize || "text-sm lg:text-xl",
    width: width || "w-auto",
    height: height || "h-auto",
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <input
      type="text"
      className={`border rounded p-2 focus:outline-none ${inputStyle.backgroundColor} ${inputStyle.color} ${inputStyle.fontSize} ${inputStyle.width} ${inputStyle.height}`}
      placeholder={placeholder}
      onChange={handleInputChange}
      value={inputValue}
    />
  );
};

SharedInput.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  fontSize: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  value: PropTypes.string,
};

export default SharedInput;
