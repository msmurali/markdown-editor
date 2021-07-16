import "./App.css";
import Header from "./components/header/header.jsx";
import Preview from "./components/preview/preview.jsx";
import Editor from "./components/editor/editor.jsx";
import React, { useEffect, useState } from "react";

function App() {
  const [width, setWidth] = useState({
    editorWidth: "50%",
    previewWidth: "50%",
  });

  useEffect(() => {
    let isKeyDown = false;
    let resizer = document.querySelector(".resizer");
    let main = document.querySelector(".main");
    let resizerWidth = 5;

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
        editorWidth = 20;
        previewWidth = main.clientWidth - 20 - resizerWidth;
      }

      if (!(previewWidth > 200)) {
        previewWidth = 20;
        editorWidth = main.clientWidth - 20 - resizerWidth;
      }

      if (isKeyDown) {
        setWidth({
          editorWidth: `${100 * (editorWidth / main.clientWidth)}%`,
          previewWidth: `${100 * (previewWidth / main.clientWidth)}%`,
        });
      }
    });
  }, []);

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
        <Editor width={width.editorWidth} widthHandler={widthHandler} />
        <div className="resizer"></div>
        <Preview width={width.previewWidth} widthHandler={widthHandler} />
      </main>
    </div>
  );
}

export default App;
