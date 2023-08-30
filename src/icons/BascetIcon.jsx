import PropTypes from "prop-types";

import { SlBasket } from "react-icons/sl";

const BascetIcon = ({ iconSize }) => {
  const iconStyle = {
    iconSize: iconSize || "text-4xl",
  };
  return <SlBasket className={`${iconStyle.iconSize}`} />;
};

BascetIcon.propTypes = {
  iconSize: PropTypes.string,
};

export default BascetIcon;
