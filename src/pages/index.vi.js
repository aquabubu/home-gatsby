import React from "react";
import Helmet from "react-helmet";
import { Button, Segment, Container, Header } from "semantic-ui-react";
import config from "../../data/SiteConfig";

const HomePage = () => {
  return (
    <div className="index-container">
      <Helmet>
        <title>{config.siteTitle}</title>
        <link rel="canonical" href={`${config.siteUrl}`} />
      </Helmet>
      <Segment vertical inverted textAlign="center" className="masthead">
        <Container text>
          <Header inverted as="h1">AquaBuBu</Header>
          <Header inverted as="h2">Be Hypnotic and Paranoid</Header>
          <Button primary size="huge">Bắt đầu!</Button>
        </Container>
      </Segment>
    </div>
  );
}

export default HomePage;
