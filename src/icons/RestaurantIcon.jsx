import PropTypes from "prop-types";

import { LiaPizzaSliceSolid } from "react-icons/lia";

const RestaurantIcon = ({ iconSize }) => {
  const iconStyle = {
    iconSize: iconSize || "text-4xl",
  };
  return <LiaPizzaSliceSolid className={`${iconStyle.iconSize}`} />;
};

RestaurantIcon.propTypes = {
  iconSize: PropTypes.string,
};

export default RestaurantIcon;
