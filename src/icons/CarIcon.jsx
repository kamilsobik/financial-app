import PropTypes from "prop-types";

import { BiCar } from "react-icons/bi";
const CarIcon = ({ iconSize }) => {
  const iconStyle = {
    iconSize: iconSize || "text-4xl",
  };
  return <BiCar className={`${iconStyle.iconSize}`} />;
};

CarIcon.propTypes = {
  iconSize: PropTypes.string,
};

export default CarIcon;
