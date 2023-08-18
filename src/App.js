import React from "react";
import "./App.css";
import { render } from "react-dom";
import CtaButton from "./Componets/CTA Buttton/CtaButton";
import Navbarcomponet from "./Navbar/Navbar";
import GetEnquiry from "./Componets/CTA Buttton/GetEnquiry";
import Routing from "./Routing";


function App() {
  // document.addEventListener("contextmenu", handelRightClick);
  return (
    <div className="unselectable">
      <Navbarcomponet />
      {/* <Navbarcomponet2 /> */}
      <br />
      <br />
      <br />
      <CtaButton />
      <GetEnquiry />
      {/* <BrowserRouter> */}
   <Routing/>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
