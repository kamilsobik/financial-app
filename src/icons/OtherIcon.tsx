import React from "react";
import { BiCategory } from "react-icons/bi";

interface OtherIconProps {
  iconSize?: string;
}

const OtherIcon: React.FC<OtherIconProps> = ({ iconSize }) => {
  const iconStyle = {
    fontSize: iconSize || "text-4xl",
  };

  return <BiCategory className={iconStyle.fontSize} />;
};

export default OtherIcon;
