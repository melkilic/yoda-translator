/** @format */

import React, { Component, useState } from "react";
import "./App.css";
import axios from "axios";

const styles = {
  app: {
    margin: "30px 40px",
  },
  label: {
    color: "#fff",
    margin: "0 0 0 5px",
    fontSize: "22px",
  },
  textInput: {
    padding: "10px",
    width: "500px",
    margin: "5px",
    fontSize: "21px",
   
  },
  button: {
    backgroundColor: "green",
    borderColor: "green",
    color: "#fff",
    border: "1px solid transparent",
    padding: "10px 30px",
    fontSize: "22px",
  },
  text: {
    margin: "0 0 0 5px",
    color: "#fff",
    fontSize: "32px",
  },
};
const App = () => {
  let [text, setText] = useState("");
  let [yodaText, setYodaText] = useState("");
  const handleTranslation = () => {
    axios
      .post("translate/yoda.json", { text })
      .then((res) => {
        const { translated } = res.data.contents;
        setYodaText(translated);
      })
      .catch((err) => {
        console.log(err);
      });
    setText("");
  };

  return (
    <div id="main">
      <div style={styles.app}>
        <h1>Yoda Translator</h1>
        <label style={styles.label}>English</label>
        <br />
        <input
          style={styles.textInput}
          type="text"
          placeholder="Type your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button style={styles.button} onClick={handleTranslation}>
          Translate
        </button>
        <br />
        <label style={styles.label}>Yoda</label>
        <div style={styles.text}>{yodaText}</div>
      </div>
    </div>
  );
};

export default App;
