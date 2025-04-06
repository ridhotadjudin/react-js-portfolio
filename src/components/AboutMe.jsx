import aboutImgPath from './img/hero_img.png';

export default function AboutMe() {
    return (
        <section className="about--section" id="AboutMe">
            <div className="about--section--img">
                <img src={aboutImgPath} alt="About Me"></img>
            </div>
            <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I am a Full Stack Engineer with expertise in end-to-end development, building scalable web applications with seamless user experiences and robust backend architectures.
          </p>
          <p className="hero--section-description">
            I specialize in CI/CD implementation, streamlining software delivery with automated build, test, and deployment pipelines using tools like GitHub Actions and Jenkins.
          </p>
          <p className="hero--section-description">
            With strong skills in test automation using Selenium, Playwright, and Cypress, I ensure high software quality by integrating automated testing into CI/CD workflows, reducing bugs and improving reliability.
          </p>
        </div>
      </div>
        </section>
    );
}