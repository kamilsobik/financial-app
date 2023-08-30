import PropTypes from "prop-types";

import { MdSchool } from "react-icons/md";
const EducationIcon = ({ iconSize }) => {
  const iconStyle = {
    iconSize: iconSize || "text-4xl",
  };
  return <MdSchool className={`${iconStyle.iconSize}`} />;
};

EducationIcon.propTypes = {
  iconSize: PropTypes.string,
};

export default EducationIcon;
