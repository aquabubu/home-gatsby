import React from 'react';
import graphql from 'graphql';
import Layout from './index';
import { addLocaleData } from 'react-intl';
import vi from 'react-intl/locale-data/vi';
import 'intl/locale-data/jsonp/vi';
import messages from '../../data/messages/vi';

addLocaleData(vi);

export default (props) => (
  <Layout
    {...props}
    i18nMessages={messages}
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
