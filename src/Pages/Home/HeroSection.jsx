import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hi, I'm Matt</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software Engineer</span>
          </h1>
          <Link 
          to="Contact" spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-primary">Get In Touch</Link>
        </div>

      </div>
    </section>
  );
}
