import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppProvider } from "./AppContext";

function App() {
  const [isDark] = useState(false);
  return (
    <AppProvider>
      <div className={`app ${isDark && "mode--dark"}`}>
        <Navbar />
        <div id="components__container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
