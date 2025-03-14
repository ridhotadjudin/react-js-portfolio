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
                        Ngaduk Pasir
                    </h1>
                    <p className="hero--section-description">
                        An Quality Assurance Engineer with a background in the information technology industry. 
                        <br />
                        Proven leader, creative thinker and innovation driver. Graduated from the National Institute of Technology, Bandung Indonesia.
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