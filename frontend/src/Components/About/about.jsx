import "../../Styles/About/about.css";
import asset5 from "../../assets/Properties_assets/asset 5.jpeg";
import asset10 from "../../assets/Properties_assets/asset 10.jpeg";
import { ContactUs } from "../Properties/ContactUs";

export const About = () => {
  return (
    <div>
      <div className="hero-about-container">
        <h1>
          Discover Our Story <br /> and Expertise
        </h1>
      </div>
      {/* about section */}
      <div className="about-section">
        <div className="about-image">
          <img className="img1" src={asset5} alt="About Us" />
        </div>
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            Welcome to Real Estate, your trusted partner in the world of real
            estate. With a passion for connecting people with their dream
            properties, we are dedicated to providing exceptional service and
            delivering outstanding results.
          </p>
          <p>
            At Real Estate, we pride ourselves on being a trusted and reputable
            name in the real estate industry. With years of experience and a
            dedicated team of professionals, we are committed to providing
            exceptional service to our clients. Whether you are buying, selling,
            or renting, we are here to guide you throughout the entire process
            and ensure a smooth and successful transaction.
          </p>
        </div>
      </div>
      <div className="center">
        <h3>Client-Centric Approach</h3>
        <h1>
          Our clients are our priority. Exceptional
          <br />
          customer service and personalized experiences <br />
          define our company culture.
        </h1>
      </div>

      {/* story section */}
      <div className="about-section">
        <div className="about-content">
          <h1>Our Story</h1>
          <p>
            Founded 10 years ago by John Oliver, our company was born out of a
            deep understanding of the challenges and frustrations that buyers,
            sellers, and investors often face in the market.
          </p>
          <p>
            At Real Estate, we pride ourselves on being a trusted and reputable
            name in the real estate industry. With years of experience and a
            dedicated team of professionals, we are committed to providing
            exceptional service to our clients. Whether you are buying, selling,
            or renting, we are here to guide you throughout the entire process
            and ensure a smooth and successful transaction.
          </p>
        </div>
        <div className="about-image">
          <img className="img1" src={asset10} alt="About Us" />
        </div>
      </div>
      <ContactUs />
    </div>
  );
};
