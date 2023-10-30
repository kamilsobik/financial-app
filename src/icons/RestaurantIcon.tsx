import React from "react";
import { LiaPizzaSliceSolid } from "react-icons/lia";

interface RestaurantIconProps {
  iconSize?: string;
}

const RestaurantIcon: React.FC<RestaurantIconProps> = ({ iconSize }) => {
  const iconStyle = {
    fontSize: iconSize || "text-4xl",
  };

  return <LiaPizzaSliceSolid className={iconStyle.fontSize} />;
};

export default RestaurantIcon;
