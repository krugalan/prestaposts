import React from "react";
import "./styles.css";

export const SpinnerLoader = () => {
  return (
    <div className="overlayBack">
      <div className="lds-circle">
        <div></div>
      </div>
    </div>
  );
};
