import React from "react";
import "./ThemeDividerVerticalLeft.css";

const ThemeDividerVerticalLeft = ({ themeName }) => {
  return (
    <div className="dividerVertLeft">
      <h1 className="themeName">{themeName}</h1>
      <div className="line-2"></div>
    </div>
  );
};

export default ThemeDividerVerticalLeft;
