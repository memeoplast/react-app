import { React, useContext, useEffect } from "react";
import Header from "../Components/Header/Header.jsx";
import Testimonials from "../Components/Testimonial-Cards/Testimonials.jsx";
import Pricing from "../Components/Pricing";
import AboutUs from "../Components/Body/AboutUs";
import ResponsiveCarousel from "../Components/Carousel/Carousel.jsx";
import { AppContext } from "../AppContext.jsx";

function Home() {
  const { isDark } = useContext(AppContext);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const element = document.getElementById(hash.slice(1));
    element?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="">
      <Header isDark={isDark} />
      <ResponsiveCarousel />
      <Pricing />
      <Testimonials />
      <AboutUs />
    </div>
  );
}

export default Home;
