import React from 'react';
import graphql from 'graphql';
import Layout from './index';
import { addLocaleData } from 'react-intl';

import vi from 'react-intl/locale-data/vi';
import 'intl/locale-data/jsonp/vi';

addLocaleData(vi);

export default (props) => (
  <Layout
    {...props}
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
