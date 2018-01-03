import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

const TagTemplate = (props) => {
  const tag = props.pathContext.tag;
  const postEdges = props.data.allMarkdownRemark.edges;
  
  return (
    <div className="tag-container">
      <Helmet>
        <title>{`Posts tagged as "${tag}" | ${config.siteTitle}`}</title>
        <link rel="canonical" href={`${config.siteUrl}/${tag}`} />
      </Helmet>
      <PostListing postEdges={postEdges} />
    </div>
  );
}

export default TagTemplate

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            cover
            date
            category
            tags
          }
        }
      }
    }
  }
`;
