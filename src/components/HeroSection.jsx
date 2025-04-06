import React from 'react';
import heroImgPath from './img/hero_img.png';

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Ridho </p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Full Stack</span>{" "}
                        <br />
                        Quality Engineer
                    </h1>
                    <p className="hero--section-description">
                        I am a Full Stack Quality Engineer specializing in both manual and automation testing, ensuring software reliability and efficiency. With expertise in CI/CD pipelines and deployment processes, I strive to integrate quality into every stage of development. Passionate about optimizing testing frameworks and improving software delivery.
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