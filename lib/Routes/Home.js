import { React, useEffect } from "react";
import Header from "../Components/Header/Header.jsx";
import Testimonials from "../Components/Testimonial-Cards/Testimonials.jsx";
import Pricing from "../Components/Pricing";
import AboutUs from "../Components/Body/AboutUs";
import ResponsiveCarousel from "../Components/Carousel/Carousel.jsx";
function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const element = document.getElementById(hash.slice(1));
    element?.scrollIntoView({
      behavior: "smooth"
    });
  }, []);
  return dom("div", {
    className: ""
  }, dom(Header, null), dom(ResponsiveCarousel, null), dom(Pricing, null), dom(Testimonials, null), dom(AboutUs, null));
}
export default Home;