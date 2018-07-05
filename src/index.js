import React from "react";
import ReactDOM from "react-dom";
import Slider from "./components/Slider.component";

import "./styles.css";

function App() {
  return <Slider />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
