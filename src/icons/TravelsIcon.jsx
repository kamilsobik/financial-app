import PropTypes from "prop-types";

import { SiYourtraveldottv } from "react-icons/si";

const TravelsIcon = ({ iconSize }) => {
  const iconStyle = {
    iconSize: iconSize || "text-4xl",
  };
  return <SiYourtraveldottv className={`${iconStyle.iconSize}`} />;
};

TravelsIcon.propTypes = {
  iconSize: PropTypes.string,
};

export default TravelsIcon;
