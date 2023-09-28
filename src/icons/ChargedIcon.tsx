import React from "react";
import { BsCalendarMonth } from "react-icons/bs";

interface ChargedIconProps {
  iconSize?: string;
}

const ChargedIcon: React.FC<ChargedIconProps> = ({ iconSize }) => {
  const iconStyle = {
    fontSize: iconSize || "text-4xl",
  };

  return <BsCalendarMonth className={iconStyle.fontSize} />;
};

export default ChargedIcon;
