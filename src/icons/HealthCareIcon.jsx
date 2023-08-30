import PropTypes from "prop-types";

import { FaKitMedical } from "react-icons/fa6";

const HealthCareIcon = ({ iconSize }) => {
  const iconStyle = {
    iconSize: iconSize || "text-4xl",
  };
  return <FaKitMedical className={`${iconStyle.iconSize}`} />;
};

HealthCareIcon.propTypes = {
  iconSize: PropTypes.string,
};

export default HealthCareIcon;
