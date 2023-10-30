import React from "react";
import { SiYourtraveldottv } from "react-icons/si";

interface TravelsIconProps {
  iconSize?: string;
}

const TravelsIcon: React.FC<TravelsIconProps> = ({ iconSize }) => {
  const iconStyle = {
    fontSize: iconSize || "text-4xl",
  };

  return <SiYourtraveldottv className={iconStyle.fontSize} />;
};

export default TravelsIcon;
