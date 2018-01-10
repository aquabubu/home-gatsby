import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import { Button, Segment, Icon, Grid, Header } from "semantic-ui-react";
import config from "../../data/SiteConfig";

const HomePage = () => {
  return (
    <div className="index-container">
      <Helmet>
        <title>{config.siteTitle}</title>
        <link rel="canonical" href={`${config.siteUrl}`} />
      </Helmet>

      <Segment inverted vertical textAlign="center" className="masthead">
        <img src='/images/home-banner.png' alt="" />
        <Header as="h1">Welcome to AquaBuBu Website!</Header>
        <Header as="h2">Be Hypnotic and Paranoid</Header>
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
              These posts will help you - the new mom - not only have a healthy and safe pregnancy but also having some "basic concepts" when raising your baby.
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
              All of my information and experiences when traveling can be found here. Enjoy!
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
              Eat to live? No, to me, I live to eat. I want to enjoy all the delicious food in this whole world. 
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
              Every woman is beautiful. It just takes the right man to see it. Why don't we make every man see it from you?
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
