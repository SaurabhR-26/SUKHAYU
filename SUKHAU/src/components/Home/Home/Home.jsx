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
import "./Home.css";

const Home = () => {
  return (
    <>
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
        <a
          href="https://mediafiles.botpress.cloud/e285beea-1d90-43b7-8f22-50f4549371e1/webchat/bot.html"
          target="_blank"
          class="absolute bottom-8 right-2"
        >
          <img src={chatimg} alt="" class="custom-image" />
        </a>
      </div>
    </>
  );
};

export default Home;
