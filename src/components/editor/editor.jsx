import React from "react";
import "./editor.css";

const Editor = ({ width, markdownHandler }) => {
  return (
    <>
      <div className="editor" style={{ width: width }}>
        <textarea className="textarea" onChange={markdownHandler}></textarea>
      </div>
    </>
  );
};

export default Editor;
