import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// const root = ReactDOM.createRoot(document.getElementById('root'));:
// This line creates a root element for rendering a React application.

// ReactDOM.createRoot is a method provided by ReactDOM that initializes a new root element. You provide it with an existing HTML element by using document.getElementById('root'). This element is typically a <div> with the id "root" and serves as the container for your React application.

// root.render():
// This method is used to render a React element into the specified root element.
// In your code, the root variable created in the previous step is used to render the content.

reportWebVitals();
