import "./App.css";
import Header from "./components/header/header.jsx";
import Preview from "./components/preview/preview.jsx";
import Editor from "./components/editor/editor.jsx";
import React, { useEffect, useState } from "react";

export const MarkdownContext = React.createContext();

function App() {
  const [width, setWidth] = useState({
    editorWidth: "50%",
    previewWidth: "50%",
  });

  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    let isKeyDown = false;
    let resizer = document.querySelector(".resizer");
    let main = document.querySelector(".main");
    let resizerWidth = 10;

    resizer.addEventListener("dblclick", widthHandler);

    resizer.addEventListener("mousedown", (event) => {
      event.preventDefault();
      isKeyDown = true;
      main.classList.add("onselect");
    });

    document.addEventListener("mouseup", () => {
      isKeyDown = false;
      main.classList.remove("onselect");
    });

    document.addEventListener("mousemove", (event) => {
      let width = event.pageX;

      let editorWidth = width - resizerWidth;
      let previewWidth = main.clientWidth - editorWidth;

      if (!(editorWidth > 200)) {
        editorWidth = 0;
        previewWidth = main.clientWidth - resizerWidth;
      }

      if (!(previewWidth > 200)) {
        previewWidth = 0;
        editorWidth = main.clientWidth - resizerWidth;
      }
      if (isKeyDown) {
        setWidth({
          editorWidth: `${100 * (editorWidth / main.clientWidth)}%`,
          previewWidth: `${100 * (previewWidth / main.clientWidth)}%`,
        });
      }
    });
  }, []);

  const markdownHandler = () => {
    const textarea = document.querySelector(".textarea");
    setMarkdown(textarea.value);
  };

  const widthHandler = () => {
    const main = document.querySelector(".main");
    setWidth({
      editorWidth: main.clientWidth / 2,
      previewWidth: main.clientWidth / 2,
    });
  };

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Editor width={width.editorWidth} markdownHandler={markdownHandler} />
        <div className="resizer" onClick={widthHandler}></div>
        <MarkdownContext.Provider value={markdown}>
          <Preview width={width.previewWidth} />
        </MarkdownContext.Provider>
      </main>
    </div>
  );
}

export default App;
