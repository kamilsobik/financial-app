import React from "react";
import { LiaGlassMartiniAltSolid } from "react-icons/lia";

interface AmusementIconProps {
  iconSize?: string;
}

const AmusementIcon: React.FC<AmusementIconProps> = ({ iconSize }) => {
  const iconStyle = {
    fontSize: iconSize || "text-4xl",
  };

  return <LiaGlassMartiniAltSolid className={iconStyle.fontSize} />;
};

export default AmusementIcon;
