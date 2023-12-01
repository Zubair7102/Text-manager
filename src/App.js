// // import logo from './logo.svg';

// import "./App.css";
// import About from "./components/About";
// import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// import Alert from "./components/Alert";
// import React, { useState } from "react";

// import { BrowserRouter, Route, Routes } from "react-router-dom";

// // let name = "Zubair";
// function App() {
//   const [mode, setMode] = useState(`light`);
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type,
//     });
//     setTimeout(() => {
//       setAlert(null);
//     }, 3000);
//   };

//   const toggleMode = () => {
//     if (mode === "light") {
//       setMode("dark");
//       document.body.style.backgroundColor = "#2b2d42";
//       showAlert("Dark mode has been enabled", "success");
//     } else {
//       setMode("light");
//       document.body.style.backgroundColor = "white";
//       showAlert("Light mode has been enabled", "success");
//     }
//   };

//   return (
//     <>
//     <BrouserRouter>
//       <Navbar
//         title="Text-Utilities"
//         aboutText="About Text-Utilities"
//         mode={mode}
//         toggleMode={toggleMode}
//       />
//       <Alert alert={alert} />
//       <div className="container my-3">
               
//       <div className="container my-3">
//       <Routes>
//             <Route path="/about" element={<About />} />
//           </Routes>
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <TextForm
//                   showAlert={showAlert}
//                   heading="Enter the text to analyze below"
//                   mode={mode}
//                 />
//               }
//             />
//           </Routes>
//         </div>
//       </BrowserRouter>

//         {/* <About/> */}
//     </>
//   );
// }

// export default App;





import "./App.css";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(`light`); // Whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // Toggle  Dark Mode
  const toggleMode = () => {
    if (mode === `light`) {
      setMode(`dark`);
      document.body.style.backgroundColor = "#020334";
      showAlert(`Dark mode has been enabled`, "success");
      // document.title = "TextUtils - Dark Mode";
    } else {
      setMode(`light`);
      document.body.style.backgroundColor = "white";
      showAlert(`Light mode has been enabled`, "success");
      // document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />
        <div className="container my-3" mode={mode}>
          <Routes>
            <Route path="/about" element={<About  mode={mode}/>} />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Try TextUtils - word Counter, Character Counter, Remove Extra spaces" 
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;