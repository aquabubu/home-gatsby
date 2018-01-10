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
        <Header as="h1">Chào mừng đến với AquaBuBu Website!</Header>
        <Header as="h2">Be Hypnotic and Paranoid</Header>
      </Segment>

      <Segment vertical className="stripe alternate feature">
        <Grid columns="4" textAlign="center" divided relaxed stackable className="container">
          <Grid.Row>
            <Grid.Column>
              <Header icon>
                <Icon name="child" />
                Bé yêu
              </Header>
              <p>
              Những bài viết này sẽ giúp bạn - những người mẹ tương lai - có một thai kỳ khỏe mạnh, an toàn và có thêm thông tin về một số "khái niệm cơ bản" khi nuôi dạy bé yêu.
              </p>
              <Link to="/en/baby/">
                <Button content='Xem thêm' icon='right arrow' labelPosition='right' />
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Header icon>
                <Icon name="travel" />
                Du lịch
              </Header>
              <p>
                Tất cả những thông tin và kinh nghiệm du lịch của mình ở đây nhé. Cùng lên kế hoạch đi chơi thôi nào!
              </p>
              <Link to="/en/travel/">
                <Button content='Xem thêm' icon='right arrow' labelPosition='right' />
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Header icon>
                <Icon name="food" />
                Ẩm thực
              </Header>
              <p>
                Ăn để sống hả? Không nhé, với mình sống là để ăn. Mình muốn thưởng thức tất cả các món ăn ngon trên thế giới này.
              </p>
              <Link to="/en/cuisine/">
                <Button content='Xem thêm' icon='right arrow' labelPosition='right' />
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Header icon>
                <Icon name="heart" />
                Làm đẹp
              </Header>
              <p>
              Tất cả phụ nữ đều đẹp nhưng phải đúng Mr. Right mới thấy được điều đó. Sao chúng ta không làm tất cả đàn ông đều thấy mình đẹp nhỉ?
              </p>
              <Link to="/en/beauty/">
                <Button content='Xem thêm' icon='right arrow' labelPosition='right' />
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}

export default HomePage;
