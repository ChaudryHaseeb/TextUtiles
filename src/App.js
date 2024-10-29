import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [Dlmode, setDlMode] = useState("light");
  const toggleDlMode = () => {
    if (Dlmode === "light") {
      setDlMode("dark");
      document.body.style.backgroundColor = "#274775";
      document.title = "TextUtils-Dark Mode";
    } else {
      setDlMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils-Light Mode";
    }
  };
  return (
    <>
      {/* <Navbar title='TextUtils' About='About TextUtils'/> */}
      {/* <Navbar/> */}
      <BrowserRouter>
      <Navbar title="TextUtils" Dlmode={Dlmode} toggleDlMode={toggleDlMode} />
        <div className="container my-5">
          <Routes>
            <Route exact path="/" element={ <Textform
                heading="Enter your text below"
                Dlmode={Dlmode}
                toggleDlMode={toggleDlMode}
              />}>
            </Route>
            <Route exact path="/about" element={<About />}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
