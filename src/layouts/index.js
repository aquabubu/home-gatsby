import React from "react";
import Link from "gatsby-link";
import { Segment, Icon, Container, Sidebar } from "semantic-ui-react";
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

const MainLayout = ({ location, children }) => {
  const menuItems = [
    { name: "Home", path: "/", exact: true, icon: "home", inverted: true },
    { name: "About", path: "/about/", exact: true, icon: "info circle" },
    { name: "Blog", path: "/blog/", exact: false, icon: "newspaper" },
  ];
  const pathname = location.pathname;
  
  return (
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
  );
}

export default MainLayout;
