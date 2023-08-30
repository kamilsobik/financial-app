import PropTypes from "prop-types";

import { LiaGlassMartiniAltSolid } from "react-icons/lia";
const AmusementIcon = ({ iconSize }) => {
  const iconStyle = {
    iconSize: iconSize || "text-4xl",
  };
  return <LiaGlassMartiniAltSolid className={`${iconStyle.iconSize}`} />;
};

AmusementIcon.propTypes = {
  iconSize: PropTypes.string,
};

export default AmusementIcon;
