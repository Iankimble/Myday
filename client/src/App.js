import React from "react";
import { BrowserRouter } from "react-router-dom";
// import Router from "./Router";
// import Footer from "./main/Footer";
import Router from "./Router";
const App = () => (
  <div>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </div>
);
export default App;
