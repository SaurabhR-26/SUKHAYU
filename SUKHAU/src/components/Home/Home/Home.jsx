import React from "react";
import Blog from "../Blog/Blog";
import Footer from "../../Shared/Footer/Footer";
import Testimonial from "../Testimonial/Testimonial";
import ClinicAndSpecialities from "../ClinicAndSpecialities/ClinicAndSpecialities";
import BookDoctor from "../BookOurDoctor/BookDoctor";
import Availabe from "../AvailableFeatures/Available";
import HeroSection from "../HeroSection/HeroSection";
import InfoPage from "../InfoPage/InfoPage";
import Header from "../../Shared/Header/Header";
import Service from "../Services/Service";
import Gallery from "../Gallery/Gallery";
import OurDoctors from "../OurDoctor/OurDoctors";
import chatimg from "../../../images/doctor_chatbot.webp";
import Chatbot from "../Chatbot/chatbot";
import "./Home.css";

const Home = () => {
  // const { scrollYProgress } = useScroll();

  return (
    <>
      {/* <motion.div
        className="fixed p-1 top-0 z-1 left-0 right-0 h-3 bg-red-500 animate-none origin-top-left"
        style={{ scaleX: scrollYProgress }}
      /> */}

      <Header />
      <HeroSection />

      <InfoPage />
      <Service />
      <ClinicAndSpecialities />
      {/* <BookDoctor /> */}
      {/* <Blog /> */}
      <Availabe />
      <OurDoctors />
      {/* <Testimonial /> */}
      <Gallery />
      <Footer />
      <div class="custom-container">
        <Chatbot />
      </div>
    </>
  );
};

export default Home;
