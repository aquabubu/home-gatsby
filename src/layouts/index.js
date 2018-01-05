import React from "react";
import { Segment, Icon, Container, Sidebar } from "semantic-ui-react";
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
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

const MainLayout = ({ location, data, children, messages }) => {
  const menuItems = [
    { name: "home", path: "/", icon: "home" },
    { name: "about", path: "/about/", icon: "info circle" },
    { name: "baby", path: "/baby/", icon: "child" },    
    { name: "travel", path: "/travel/", icon: "travel" },
    { name: "cuisine", path: "/cuisine/", icon: "food" },
    { name: "beauty", path: "/beauty/", icon: "heart" },
  ];
  const pathname = location.pathname;

  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  return (
    <div>
      <Sidebar.Pushable as={Segment}>
        <SidebarMenu 
          pathname={pathname} 
          items={menuItems} 
          langKey={langKey} 
          messages={messages}          
          visible={false}
        />
        
        <Sidebar.Pusher style={{ minHeight: "100vh" }}>
          <HeaderMenu 
            pathname={pathname} 
            items={menuItems} 
            langKey={langKey}
            messages={messages}            
            langsMenu={langsMenu}
          />

          <div style={{ paddingBottom: 60 }}>
            {children()}
          </div>

          <Segment vertical style={{ position: "absolute", bottom: 0, width: "100%" }}>
            <Footer config={config} />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
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
