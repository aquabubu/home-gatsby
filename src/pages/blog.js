import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";

const BlogPage = (props) => {
  const postEdges = props.data.allMarkdownRemark.edges;

  return (
    <div className="index-container">
      <Helmet>
        <title>{config.siteTitle}</title>
        <link rel="canonical" href={`${config.siteUrl}`} />
      </Helmet>
      <SEO postEdges={postEdges} />
      <PostListing postEdges={postEdges} />
    </div>
  );
}

export default BlogPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
