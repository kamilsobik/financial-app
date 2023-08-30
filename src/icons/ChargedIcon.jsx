import PropTypes from "prop-types";

import { BsCalendarMonth } from "react-icons/bs";

const ChargedIcon = ({ iconSize }) => {
  const iconStyle = {
    iconSize: iconSize || "text-4xl",
  };
  return <BsCalendarMonth className={`${iconStyle.iconSize}`} />;
};

ChargedIcon.propTypes = {
  iconSize: PropTypes.string,
};

export default ChargedIcon;
