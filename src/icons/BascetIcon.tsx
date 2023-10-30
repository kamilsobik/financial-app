import React from "react";
import { SlBasket } from "react-icons/sl";

interface BasketIconProps {
  iconSize?: string;
}

const BasketIcon: React.FC<BasketIconProps> = ({ iconSize }) => {
  const iconStyle = {
    fontSize: iconSize || "text-4xl",
  };

  return <SlBasket className={iconStyle.fontSize} />;
};

export default BasketIcon;
