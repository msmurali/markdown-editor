import React, { useContext } from "react";
import "./preview.css";
import ReactMarkdown from "react-markdown";
import { MarkdownContext } from "../../App";

const Preview = ({ width }) => {
  const markdown = useContext(MarkdownContext);

  return (
    <div className="preview" style={{ width: width }}>
      <ReactMarkdown children={markdown} className="markdown" />
    </div>
  );
};

export default Preview;
