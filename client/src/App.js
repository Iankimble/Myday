import React from "react";
import MainRouter from "./MainRouter";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <div>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </div>
);

export default App;
