import React, {useState} from "react";

export default function TextForm (props) {
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText)
    // props.showALert("Converted to UpperCase!", "Success");
  }

  const handleLoClick=()=>{
    let newText = text.toLowerCase();
    setText(newText)
    // props.showALert("Converted to LowerCase", "Success");
  }

  const handleCopy=()=>{
     document.querySelector("textarea").select();
      document.execCommand('copy');
      // props.showALert("Copied Successfully", "Success");
    
  }

  const handleClear=()=>{
    document.querySelector("textarea").value = "";
    // props.showALert("Cleared Successfully", "Success");
  }
  
  const handleTrimSpace=()=>{
    var textarea = document.getElementById("myBox");
    textarea.value = textarea.value.replace(/\s+/g, '');
    // props.showALert("Trimmed extra spaces successfully", "Success");
  }

  
   


  const handleOnChange=(event)=>{
    // console.log("on Change");
    setText(event.target.value);
  }
  
  const [text, setText] = useState('');
  return (
    <>
    <div className="container"  style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1 className="mb-4">{props.heading} </h1>
      <div className="mb-3">
        
        <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? '#2b2d42':'white', color: props.mode === 'dark'? 'white':'black' }} id="myBox" rows="8"></textarea>
      </div>
      
      <button disabled={text.length===0}  className = "btn btn-success mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
      
      <button disabled={text.length===0} className = "btn btn-success mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
      
      <button disabled={text.length===0} className = "btn btn-success mx-2 my-2" onClick={handleCopy}>Copy Text</button>
      
      <button disabled={text.length===0} className = "btn btn-success mx-2 my-2" onClick={handleClear}>Clear Text</button>
      
      <button disabled={text.length===0} className = "btn btn-success mx-2 my-2" onClick={handleTrimSpace}>Trim Extra Space</button>
    
    </div>
    <div className="container my-3"  style={{color: props.mode === 'dark'?'white':'black'}} >
      <h2>Your text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
      {/* text.split(" ") will give an array and text.split(" ").length will give length of this array  */}
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read </p>
      <h3>Preview</h3>
      <p>{text.length>0? text: "Nothing to preview"}</p>
    </div>
    </>
  )
}

