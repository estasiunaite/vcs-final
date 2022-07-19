import React from "react";
import "./ThemeDividerHorizontal.css";

const ThemeDividerHorizontal = ({ themeName }) => {
  return (
    <div ClassName="dividerHor">
      <h2 className="themeNameHor">{themeName}</h2>
      <div class="line-3"></div>
    </div>
  );
};

export default ThemeDividerHorizontal;
