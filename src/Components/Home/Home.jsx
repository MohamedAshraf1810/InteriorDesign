import React from "react";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import About from "../About/About";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Clients from "../Clients/Clients";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import PopUp from "../PopUp/PopUp";

const Home = () => {
  return (
    <>
      <PopUp />
      <HomeCarousel />
      <About />
      <Services />
      <Projects />
      <Clients />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
