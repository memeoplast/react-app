import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Header from "./Components/Header/Header.jsx";
import Testimonials from "./Components/Testimonial-Cards/Testimonials.jsx";
import Pricing from "./Routes/Pricing";
import AboutUs from "./Components/Body/AboutUs";
import Footer from "./Components/Footer/Footer.jsx";
import ResponsiveCarousel from "./Components/Carousel/Carousel.jsx";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={`app ${isDark && "mode--dark"}`}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Header isDark={isDark} />
      <ResponsiveCarousel />
      <Pricing />
      <Testimonials />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
