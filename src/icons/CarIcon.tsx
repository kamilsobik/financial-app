import React from "react";
import { BiCar } from "react-icons/bi";

interface CarIconProps {
  iconSize?: string;
}

const CarIcon: React.FC<CarIconProps> = ({ iconSize }) => {
  const iconStyle = {
    fontSize: iconSize || "text-4xl",
  };

  return <BiCar className={iconStyle.fontSize} />;
};

export default CarIcon;
