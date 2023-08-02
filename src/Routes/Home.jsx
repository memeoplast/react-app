import React from "react";
import Header from "../Components/Header/Header.jsx";
import Testimonials from "../Components/Testimonial-Cards/Testimonials.jsx";
import Pricing from "../Components/Pricing";
import AboutUs from "../Components/Body/AboutUs";
import ResponsiveCarousel from "../Components/Carousel/Carousel.jsx";

function Home() {
  return (
    <div className="">
      <Header />
      <ResponsiveCarousel />
      <Pricing />
      <Testimonials />
      <AboutUs />
    </div>
  );
}

export default Home;
