import React, {useState} from "react";

export default function TextForm(props) {

  const handleUpperClick = ()=> {
    // console.log("Uppercase clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to Uppercase", "success");
  }
  const handleLowerClick = ()=> {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to Lowercase", "success");
  }
  const handleClearClick = ()=> {
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared", "success");
  }
  const handleExtraSpaces = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Spaces", "success");
  }
  const handleOnChange = (event)=> {
    // console.log("On Change");
    setText(event.target.value);
  }


  const [text, setText] = useState('');
  return (
    <>
    <div className="container">
    <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" placeholder="Enter Text..." style={{backgroundColor: props.mode ==='dark'?'#ccd4db':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpperClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text Space</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters.</p>
      <h2>Preview</h2>
      <p style={{color: props.mode==='dark'?'white':'black'}}>{text}</p>
    </div>
    </>
  );
}
