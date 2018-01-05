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
      <About />
      aaaaaaaaaa
    </div>
  );
}

export default AboutPage;
