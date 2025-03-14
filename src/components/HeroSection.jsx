import React from 'react';
import heroImgPath from './img/hero_img.png';

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Ridho</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Full Stack</span>{" "}
                        <br />
                        Engineer
                    </h1>
                    <p className="hero--section-description">
                        I am a Full Stack Engineer with expertise in end-to-end development, building scalable web applications with seamless user experiences and robust backend architectures.
                        <br />
                        I specialize in CI/CD implementation, streamlining software delivery with automated build, test, and deployment pipelines using tools like GitHub Actions and Jenkins.
                        <br />
                        With strong skills in test automation using Selenium, Playwright, and Cypress, I ensure high software quality by integrating automated testing into CI/CD workflows, reducing bugs and improving reliability.
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src={heroImgPath} alt="Hero Section" />
            </div>
        </section>
    );
}