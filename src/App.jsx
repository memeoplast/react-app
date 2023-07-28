import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Body from "./Components/Body/Body.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ResponsiveCarousel from "./Components/Carousel/Carousel.jsx";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  console.log("isDark", isDark);
  return (
    <div className={`app ${isDark && "mode--dark"}`}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Body />
      <ResponsiveCarousel />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
