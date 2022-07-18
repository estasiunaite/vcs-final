import React from "react";
import "./ThemeDividerVertical.css";

const ThemeDividerVertical = ({ themeName }) => {
  return (
    <div ClassName="themeDividerVert">
      <h1 className="themeName">{themeName}</h1>
      <hr class="line-2"></hr>
    </div>
  );
};

export default ThemeDividerVertical;
