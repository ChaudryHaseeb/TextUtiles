import React, { useState } from "react";

export default function Textform(props) {
  const handleUPchange = () => {
    // console.log("UpperCase is clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLWchange = () => {
    // console.log("LowerCase is clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleClear = () => {
    let newtext = "";
    setText(newtext);
  };
  const handleCopy = () => {
    // console.log("copy");
    let newtext = document.getElementById("Textarea");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
  };
  const handleExtraSpace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  };
  const handleOnChange = (e) => {
    // console.log("clicked");
    setText(e.target.value);
  };
  const [text, setText] = useState("");

  return (
    <div>
      <h1 style={{backgroundColor: props.Dlmode === "dark" ? "#274775" : "white" , color:props.Dlmode === "dark" ? "white" : "black" 
            }}>{props.heading}</h1>
      <div className="mb-3" >
        <textarea
          className="form-control my-4"
          id="Textarea"
          value={text}
          rows="10"
          onChange={handleOnChange}
          style={{backgroundColor: props.Dlmode === "dark" ? "black" : "white" , color:props.Dlmode === "dark" ? "white" : "black" 
            }}
        ></textarea>
        <button className="btn btn-primary my-2" onClick={handleUPchange}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLWchange}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary my-2 mx-2"
          onClick={handleExtraSpace}
        >
          Remove ExtraSpaces
        </button>
      </div>
      <div className="container" style={{backgroundColor: props.Dlmode === "dark" ? "#274775" : "white" , color:props.Dlmode === "dark" ? "white" : "black" 
            }}>
        <h2>Your Text summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Mintues</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter your text in above text box to preview here'}</p>
      </div>
    </div>
  );
}
