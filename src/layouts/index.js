import React from "react";
import Link from "gatsby-link";
import { Segment, Icon, Container, Sidebar } from "semantic-ui-react";
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import 'intl';
import config from "../../data/SiteConfig";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import Footer from "../components/Footer/Footer";
import "font-awesome/scss/font-awesome.scss";
import "./index.scss";
import "./global.scss";
import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";

const MainLayout = ({ location, data, children, i18nMessages }) => {
  const menuItems = [
    { name: "Home", path: "/", icon: "home" },
    { name: "About", path: "/about/", icon: "info circle" },
    { name: "Travel", path: "/travel/", icon: "travel" },
    { name: "Cuisine", path: "/cuisine/", icon: "food" },
    { name: "Beauty", path: "/beauty/", icon: "heart" },
    { name: "Baby", path: "/baby/", icon: "child" },    
  ];
  const pathname = location.pathname;

  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));
  
  return (
    <IntlProvider 
      locale={langKey} 
      messages={i18nMessages}
    >
      <div>
        <Sidebar.Pushable as={Segment}>
          <SidebarMenu Link={Link} pathname={pathname} items={menuItems} visible={false} />
          <Sidebar.Pusher style={{ minHeight: "100vh" }}>
            {/* Header */}
            {<HeaderMenu
              Link={Link}
              pathname={pathname}
              items={menuItems}
            />}

            {/* Render children pages */}
            <div style={{ paddingBottom: 60 }}>
              {children()}
            </div>

            {/* Footer */}
            <Segment vertical style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <Footer config={config} />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    </IntlProvider>
  );
}

export default MainLayout;

export const pageQuery = graphql`
  query Layout {
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
