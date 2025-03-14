import React from "react";
import AboutMe from "../../components/AboutMe";
import HeroSection from "../../components/HeroSection";
import MySkills from "../../components/MySkills";
import MyPortfolio from "../../components/MyPortfolio";
import Testimonial from "../../components/Testimonials";
import ContactMe from "../../components/ContactMe";
import Footer from "../../components/Footer";

export default function Home () {
    return(
        <>
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyPortfolio />
            <Testimonial />
            <ContactMe />
            <Footer />
        </>
    );
}