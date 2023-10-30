import React from "react";
import { MdSchool } from "react-icons/md";

interface EducationIconProps {
  iconSize?: string;
}

const EducationIcon: React.FC<EducationIconProps> = ({ iconSize }) => {
  const iconStyle = {
    fontSize: iconSize || "text-4xl",
  };

  return <MdSchool className={iconStyle.fontSize} />;
};

export default EducationIcon;
