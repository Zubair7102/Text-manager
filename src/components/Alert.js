import React from "react";

export default function Alert(props) {
  
  const capatalize =(word)=>{
    const lower = word.toLowerCase();
    // The toLowerCase method is called on the input word to convert the entire word to lowercase. This step is necessary to ensure that only the first letter is capitalized, and the rest of the word remains in lowercase.
    return lower.charAt(0).toUpperCase() + lower.slice(1);
    // lower.charAt(0) retrieves the first character of the lowercase word.
    // .toUpperCase() is then called on the first character to capitalize it.
    // lower.slice(1) extracts the rest of the word (from the second character onward).
    // Finally, these two parts are concatenated to form the capitalized word.
  
  }
  return (
    <div style={{height: '50px'}}>
     { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capatalize(props.alert.type)}</strong>: {props.alert.msg}
        {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>}
      </div>
    
  );
}
