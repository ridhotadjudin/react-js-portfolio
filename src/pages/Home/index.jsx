import React from "react";
import AboutMe from "../../components/AboutMe";
import HeroSection from "../../components/HeroSection";
import MySkills from "../../components/MySkills";
import MyPortfolio from "../../components/MyPortfolio";

export default function Home () {
    return(
        <>
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyPortfolio />
        </>
    );
}