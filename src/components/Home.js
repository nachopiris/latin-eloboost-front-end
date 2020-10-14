import React from "react";
import AOS from "aos";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import WhyUs from "./WhyUs";
import Testimonials from "./Testimonials";
import "./styles/home.css";

const Home = () => {
  AOS.init({
    duration: 800,
    once: true,
  });

  return (
    <>
      <Header />
      <HowItWorks />
      <WhyUs />
      <Testimonials />
    </>
  );
};

export default Home;
