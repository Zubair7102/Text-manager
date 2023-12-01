import React from "react";

export default function About(props) {

//     const [myStyle, setMyStyle] = useState({
//         color: 'black',
//         backgroundColor: 'white'
       
    

// })

let myStyle ={
  color: props.mode==='dark'?'white':'black',
  backgroundColor: props.mode==='dark'?'#14213d':'white',
  border:'2px solid',
  borderColor: props.mode==='dark'?'white':'#14213d'
}

// const [btntext, setBtnText]=useState("Enable dark Mode")
    
// const toggleStyle=()=>{
//     if (myStyle.color==='black')
//     {
//         setMyStyle({
            
//                 color: 'white',
//                 backgroundColor: 'black',
//                 border: '2px solid white'
      
//         })
        
//         setBtnText("Enable light Mode")
//     }
//     else{
//         setMyStyle({
//         color: 'black',
//         backgroundColor: 'white'
//     })
//     setBtnText("Enable dark Mode");
// }
// }
    
  return (
    <div className="container" >
        <h1 className="my-3" style ={{color: props.mode==='dark'?'white':'#14213d'}}>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style ={myStyle}
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"style ={myStyle}>
              Text-Utilities gives you a way to analyze your text quicly and efficiently. Be it word count, character count or preview of your text with reading time 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style ={myStyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style ={myStyle}>
             Text-Utilities is afree character counter tool that provides instant character count & word count statistics for given text. Text_utilities reports the number of words and characters. Thus it is suitable for writing text with word/ character imits
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style ={myStyle}
            >
              <strong>Browser compatibility</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"style ={myStyle}>
             This word counter software works in any web browser  such as chrome, firefox, Internet explorer, safari, opera. It suits to count characters i facebook, blog, books, excel, document, pdf, document, essay, etc. 

          </div>
        </div>
      </div>
      {/* <div className="container my-3">
      <button onClick={toggleStyle} type="button" className="btn btn-success" >{btntext}</button>
    </div> */}
   
    </div>
    </div>
  );
}
