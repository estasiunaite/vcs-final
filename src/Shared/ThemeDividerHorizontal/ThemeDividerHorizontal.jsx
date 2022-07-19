import React from "react";
import "./ThemeDividerHorizontal.css";

const ThemeDividerHorizontal = ({ themeName }) => {
  return (
    <div className="dividerHor">
      <div className="line-3"></div>
      <h2 className="themeNameHor">{themeName}</h2>
    </div>
  );
};

export default ThemeDividerHorizontal;
