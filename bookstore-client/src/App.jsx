import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterElement from "./components/FooterElement";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Outlet />
      <FooterElement />
    </>
  );
}

export default App;
