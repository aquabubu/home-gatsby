import React from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import "./About.scss";

const About = () => {
  return (
    <div className="about-container md-grid mobile-fix">
      <Card className="md-grid md-cell--8">
        <div className="about-wrapper">
          <img
            src={config.userAvatar}
            className="about-img"
            alt={config.userName}
          />
          <CardText>
            Welcome to AquaBuBu website!
            <p className="about-text md-body-1">{config.userDescription}</p>
          </CardText>
          <UserLinks labeled config={config} />
        </div>
      </Card>
    </div>
  );
}

export default About;
