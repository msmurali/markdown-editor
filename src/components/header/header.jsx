import React, { useState } from "react";
import "./header.css";
import Logo from "../../asset/icon/logo.svg";
import { HiDownload, HiCode } from "react-icons/hi";
import { ImBold } from "react-icons/im";
import {
  FaHeading,
  FaItalic,
  FaQuoteRight,
  FaImage,
  FaLink,
  FaStrikethrough,
} from "react-icons/fa";

const Header = () => {
  const [fileName, setFileName] = useState("Untitled");

  const fileNameHandler = (event) => {
    setFileName(event.target.value || "Untitled");
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="markdown editor" className="svg-logo" />
      </div>
      <div className="btn-container">
        <button className="btn">
          <FaHeading color="#000d52" className="icon" />
        </button>
        <button className="btn">
          <ImBold color="#000E52" className="icon" />
        </button>
        <button className="btn">
          <FaItalic color="#000d52" className="icon" />
        </button>
        <button className="btn">
          <FaStrikethrough color="#000d52" className="icon" />
        </button>
        <button className="btn">
          <FaQuoteRight color="#000d52" className="icon" />
        </button>
        <button className="btn">
          <HiCode color="#000d52" className="icon" />
        </button>
        <button className="btn">
          <FaLink color="#000d52" className="icon" />
        </button>
        <button className="btn">
          <FaImage color="#000d52" className="icon" />
        </button>
      </div>
      <div className="file-name">
        <input
          type="text"
          placeholder="Untitled.md"
          onChange={fileNameHandler}
        />
      </div>
      <div className="download">
        <button className="btn">
          <HiDownload color="#000d52" className="icon" size={22} />
        </button>
      </div>
    </header>
  );
};

export default Header;
