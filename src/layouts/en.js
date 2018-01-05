import React from 'react';
import Layout from './index';
import messages from '../../data/messages/en';

export default (props) => (
  <Layout
    {...props}
    messages={messages}
  />);

export const pageQuery = graphql`
  query LayoutEn {
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
