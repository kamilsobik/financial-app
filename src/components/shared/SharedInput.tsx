import React, { useState, ChangeEvent } from "react";

interface SharedInputProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: string;
  width?: string;
  height?: string;
  value?: string;
}

const SharedInput: React.FC<SharedInputProps> = ({
  placeholder,
  onChange,
  backgroundColor,
  textColor,
  fontSize,
  width,
  height,
  value,
}) => {
  const [inputValue, setInputValue] = useState<string>(value || "");

  const inputStyle = {
    backgroundColor: backgroundColor || "bg-blue-300",
    color: textColor || "text-black",
    fontSize: fontSize || "text-sm lg:text-xl",
    width: width || "w-auto",
    height: height || "h-auto",
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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

export default SharedInput;
