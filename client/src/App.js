import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Footer from "./main/Footer";

const App = () => (
  <div>
    <BrowserRouter>
      <Router />
      <Footer />
    </BrowserRouter>
  </div>
);
export default App;
