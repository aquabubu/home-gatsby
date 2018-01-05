import React from 'react';
import graphql from 'graphql';
import Layout from './index';
import { addLocaleData } from 'react-intl';

import en from 'react-intl/locale-data/en';
import 'intl/locale-data/jsonp/en';

addLocaleData(en);

export default (props) => (
  <Layout
    {...props}
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
