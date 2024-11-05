import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convorted to Upper Case", "success");

  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convorted to Lower Case", "success");

  };

  const handleClearText =() =>{
    let newText = '';
    setText(newText);
    props.showAlert("Clear All Text", "success");

  };

  const handleCopy =() =>{
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copy All Text", "success");

  }

  const removeExtraSpace =() =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove All Extra Space", "success");

  }

  

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };


  const [text, setText] = useState(" ");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label htmlFor="myBox" className="form-label">Text Area</label> */}
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="3"
          ></textarea>
        </div>
        <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convort to uppercase{" "}
        </button>
        <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convort to lowercase{" "}
        </button>&nbsp;
        <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>
            Clear Text{" "}
        </button>&nbsp;
        <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        &nbsp;
        <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={removeExtraSpace}>Remove Space</button>
      </div>
      <div className="container my-2">
        <h1>Your text summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
