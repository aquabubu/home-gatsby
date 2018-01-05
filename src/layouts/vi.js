import React from 'react';
import Layout from './index';
import messages from '../../data/messages/vi';

export default (props) => (
  <Layout
    {...props}
    messages={messages}
  />);

export const pageQuery = graphql`
  query LayoutVi {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }      
      }
    }
  }
`;
