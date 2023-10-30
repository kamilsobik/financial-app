import React from "react";
import { FaKitMedical } from "react-icons/fa6";

interface HealthCareIconProps {
  iconSize?: string;
}

const HealthCareIcon: React.FC<HealthCareIconProps> = ({ iconSize }) => {
  const iconStyle = {
    fontSize: iconSize || "text-4xl",
  };

  return <FaKitMedical className={iconStyle.fontSize} />;
};

export default HealthCareIcon;
