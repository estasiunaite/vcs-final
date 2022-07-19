import React from "react";
import "./ThemeDividerVertical.css";

const ThemeDividerVertical = ({ themeName }) => {
  return (
    <div className="dividerVert">
      <h1 className="themeName">{themeName}</h1>
      <div className="line-2"></div>
    </div>
  );
};

export default ThemeDividerVertical;
