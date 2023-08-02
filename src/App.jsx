import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={`app ${isDark && "mode--dark"}`}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <div id="components__container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
