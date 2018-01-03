import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

const CategoryTemplate = (props) => {
  const category = props.pathContext.category;
  const postEdges = props.data.allMarkdownRemark.edges;
  return (
    <div className="category-container">
      <Helmet>
        <title>{`Posts in category "${category}" | ${config.siteTitle}`}</title>
        <link rel="canonical" href={`${config.siteUrl}/${category}`} />
      </Helmet>
      <PostListing postEdges={postEdges} />
    </div>
  );
}

export default CategoryTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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
