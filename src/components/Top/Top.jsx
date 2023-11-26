/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Top = ({
  className,
  TOPButtonClassName,
  overlapGroupClassName,
  divClassName,
  vectorClassName,
  vector = "/img/vector-11-2.svg",
}) => {
  return (
    <div className={`top ${className}`}>
      <div className={`TOP-button ${TOPButtonClassName}`}>
        <div className={`overlap-group ${overlapGroupClassName}`}>
          <div className={`text-wrapper-14 ${divClassName}`}>Top!</div>
          <img className={`vector ${vectorClassName}`} alt="Vector" src={vector} />
        </div>
      </div>
    </div>
  );
};

Top.propTypes = {
  vector: PropTypes.string,
};
