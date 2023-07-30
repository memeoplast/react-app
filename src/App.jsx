import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Header from "./Components/Header/Header.jsx";
import Body from "./Components/Body/Body.jsx";
import AboutUs from "./Components/Body/AboutUs";
import Footer from "./Components/Footer/Footer.jsx";
import ResponsiveCarousel from "./Components/Carousel/Carousel.jsx";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={`app ${isDark && "mode--dark"}`}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Header />
      <Body />
      <ResponsiveCarousel />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
