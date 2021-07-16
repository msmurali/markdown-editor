import React from "react";
import "./preview.css";

const Preview = ({ width, widthHandler }) => {
  return (
    <div className="preview" style={{ width: width }}>
      {width < 200 ? (
        <div className="opener" onClick={widthHandler}>
          &lt;
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Preview;
