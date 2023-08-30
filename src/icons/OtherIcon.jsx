import PropTypes from "prop-types";

import { BiCategory } from "react-icons/bi";
const OtherIcon = ({ iconSize }) => {
  const iconStyle = {
    iconSize: iconSize || "text-4xl",
  };
  return <BiCategory className={`${iconStyle.iconSize}`} />;
};

OtherIcon.propTypes = {
  iconSize: PropTypes.string,
};

export default OtherIcon;
