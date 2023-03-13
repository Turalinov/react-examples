import React  from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Parent from './component/portal/Portal'

// const rootPortal = document.getElementById('root-portal');


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App/>
);


// const root2 = ReactDOM.createRoot(rootPortal);
// root2.render(<Parent/>)
