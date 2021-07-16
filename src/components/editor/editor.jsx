import React from "react";
import "./editor.css";

const Editor = ({ width, widthHandler }) => {
  return (
    <>
      <div className="editor" style={{ width: width }}>
        {width < 200 ? (
          <div className="opener" onClick={widthHandler}>
            &gt;
          </div>
        ) : (
          <textarea className="textarea"></textarea>
        )}
      </div>
    </>
  );
};

export default Editor;
