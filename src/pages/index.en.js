import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import { Button, Segment, Icon, Grid, Header, Image } from "semantic-ui-react";
import config from "../../data/SiteConfig";

const HomePage = () => {
  return (
    <div className="index-container">
      <Helmet>
        <title>{config.siteTitle}</title>
        <link rel="canonical" href={`${config.siteUrl}`} />
      </Helmet>
      <Segment inverted vertical textAlign="center" className="masthead">
        <Image src='/images/home-banner.png' fluid />
        <Header as="h1">AquaBuBu</Header>
        <Header as="h2">Be Hypnotic and Paranoid</Header>
        <Button primary size="huge">Enjoy more!</Button>
      </Segment>

      <Segment vertical className="stripe alternate feature">
        <Grid columns="4" textAlign="center" divided relaxed stackable className="container">
          <Grid.Row>
            <Grid.Column>
              <Header icon>
                <Icon name="child" />
                Baby
              </Header>
              <p>
                Pregnancy <br /> 
                Babysistings
              </p>
              <Link to="/en/baby/">
                <Button content='View All' icon='right arrow' labelPosition='right' />
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Header icon>
                <Icon name="travel" />
                Travel
              </Header>
              <p>
                Wonderful places <br />
                Tips
              </p>
              <Link to="/en/travel/">
                <Button content='View All' icon='right arrow' labelPosition='right' />
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Header icon>
                <Icon name="food" />
                Cuisine
              </Header>
              <p>
                Food review <br />
                What to eat
              </p>
              <Link to="/en/cuisine/">
                <Button content='View All' icon='right arrow' labelPosition='right' />
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Header icon>
                <Icon name="heart" />
                Beauty
              </Header>
              <p>
                Cosmetic review <br />
                Korea products
              </p>
              <Link to="/en/beauty/">
                <Button content='View All' icon='right arrow' labelPosition='right' />
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}

export default HomePage;
