import PropTypes from "prop-types";

import { MdOutlineTram } from "react-icons/md";
const TransportIcon = ({ iconSize }) => {
  const iconStyle = {
    iconSize: iconSize || "text-4xl",
  };
  return <MdOutlineTram className={`${iconStyle.iconSize}`} />;
};

TransportIcon.propTypes = {
  iconSize: PropTypes.string,
};

export default TransportIcon;
