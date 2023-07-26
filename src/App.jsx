import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Body from "./Components/Body/Body.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ResponsiveCarousel from "./Components/Carousel/Carousel.jsx";
import { createContext, useState } from "react";
import { ThemeContext } from "./Components/ThemeContext";

function App() {
  const [isDark, setIsDark] = useState(false);
  console.log("isDark", isDark);

  const toggleTheme = () => {
    setIsDark((curr) => !curr);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div
        className={`app ${isDark && "mode--dark"}`}
        // TODO: remove
        id={isDark ? "dark" : "light"}
      >
        <Navbar />
        <Body />
        <ResponsiveCarousel />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
