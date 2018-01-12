import React, { Component } from "react";
import Helmet from "react-helmet";
import Card from "react-md/lib/Cards";
import CardText from "react-md/lib/Cards/CardText";
import { Header, Icon } from "semantic-ui-react";
import config from "../../data/SiteConfig";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import PostCover from "../components/PostCover/PostCover";
import PostInfo from "../components/PostInfo/PostInfo";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import PostSuggestions from "../components/PostSuggestions/PostSuggestions";
import SEO from "../components/SEO/SEO";
import "./b16-tomorrow-dark.css";
import "./post.scss";

class PostTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true
    };
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    if (window.innerWidth >= 640) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }

  render() {
    const mobile = this.state.mobile;
    const expanded = !mobile;
    const postOverlapClass = mobile ? "post-overlap-mobile" : "post-overlap";
    const { path, langKey } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = path;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }

    return (
      <div className="post-page md-grid md-grid--no-spacing">
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}${post.id}`} />
        </Helmet>
        <SEO postPath={path} postNode={postNode} postSEO />
        <PostCover postNode={postNode} mobile={mobile} />
        <div
          className={`md-grid md-cell--9 post-page-contents mobile-fix ${postOverlapClass}`}
        >
          <Card className="md-grid md-cell md-cell--12 post">
            <CardText className="post-body">
              <h1 className="md-display-2 post-header">{post.title}</h1>
              <PostInfo postNode={postNode} langKey={langKey} />
              <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            </CardText>
            <CardText className="post-meta">
              <Header as='h4'>
                <Icon name='tags' />
                <Header.Content>
                  Tags
                </Header.Content>
              </Header>
              <PostTags tags={post.tags} langKey={langKey} />
              <Header as='h4'>
                <Icon name='share alternate' />
                <Header.Content>
                  Share this post
                </Header.Content>
              </Header>
              <SocialLinks
                postPath={path}
                postNode={postNode}
                mobile={this.state.mobile}
              />
            </CardText>
          </Card>
          <UserInfo
            className="md-grid md-cell md-cell--12"
            config={config}
            expanded={expanded}
            langKey={langKey}
          />
          <Disqus postNode={postNode} expanded={expanded} />
        </div>

        {/* <PostSuggestions postNode={postNode} /> */}
      </div>
    );
  }
}

export default PostTemplate

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query PostPageBySlug($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
      }
    }
  }
`;
