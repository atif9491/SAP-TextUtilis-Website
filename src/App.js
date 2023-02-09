import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let [mode, setmode] = useState("light");

  const toggle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtilis"
          about="About"
          mode={mode}
          togglefun={toggle}
        />

        <Routes>
          <Route
            path="/TextForm"
            element={
              <div className="container my-3">
                <TextForm heading="Enter The Text Below" mode={mode} />
              </div>
            }
          ></Route>

          <Route path="/About" element={
          <div className="container my-3">
          <About />
          </div>
          }></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
