import React from "react";
import { MdOutlineTram } from "react-icons/md";

interface TransportIconProps {
  iconSize: string;
}

const TransportIcon: React.FC<TransportIconProps> = ({ iconSize }) => {
  const iconStyle = {
    fontSize: iconSize || "text-4xl",
  };

  return <MdOutlineTram className={iconStyle.fontSize} />;
};

export default TransportIcon;
