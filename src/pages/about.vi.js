import React from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

const AboutPage = () => {
  return (
    <div className="about-container">
      <Helmet>
        <title>{`About | ${config.siteTitle}`}</title>
        <link rel="canonical" href={`${config.siteUrl}/about/`} />
      </Helmet>
      <About>
        <p>
          <h3>Aqua</h3>
          Aqua loves traveling and exploring wonderful places, meeting people and enjoying delicious foods. She loves to share her experiences and wants to enjoy every meaningful moment of life.
        </p>
        <p>
          <h3>BuBu</h3>
          BuBu is a diligent programmer. He loves traveling, playing different musical instruments, improving skills and self-development. He teaches Aqua coding this blog and hopes there will be no bug.
        </p>
      </About>
    </div>
  );
}

export default AboutPage;
