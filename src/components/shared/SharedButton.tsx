import React from "react";

interface SharedButtonProps {
  label: string;
  onClick: () => void;
  backgroundColor?: string;
  hoverColor?: string;
  textColor?: string;
  fontSize?: string;
  width?: string;
  height?: string;
  type?: "button" | "submit" | "reset";
}

const SharedButton: React.FC<SharedButtonProps> = ({
  label,
  onClick,
  backgroundColor,
  hoverColor,
  textColor,
  fontSize,
  width,
  height,
  type,
}) => {
  const buttonStyle = {
    backgroundColor: backgroundColor || "bg-blue-500",
    hoverColor: hoverColor || "hover:bg-blue-700",
    color: textColor || "text-white",
    fontSize: fontSize || "text-sm lg:text-xl",
    width: width || "w-40 lg:w-96",
    height: height || "h-auto",
    type: type || "button",
  };

  return (
    <button
      type={type}
      className={`font-bold py-2 px-4 rounded ${buttonStyle.backgroundColor} ${buttonStyle.hoverColor} ${buttonStyle.color} ${buttonStyle.fontSize} ${buttonStyle.width} ${buttonStyle.height}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SharedButton;
