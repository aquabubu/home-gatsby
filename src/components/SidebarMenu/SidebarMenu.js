import React from "react";
import { connect } from "react-redux";
import Link from 'gatsby-link';
import { Menu, Icon, Sidebar } from "semantic-ui-react";
import { toggleSidebar } from "../../store";

const SidebarMenu = ({ pathname, items, langKey, visible, dispatch }) => {
  const menu = require(`../../../data/menu/${langKey}`);

  return (
    <Sidebar 
      as={Menu} 
      animation="slide along" 
      width="thin"
      visible={visible} 
      icon="labeled" 
      vertical 
    >
      {items.map((item) => {
        const itemName = menu[item.name];
        const itemPath = `/${langKey}${item.path}`
        const isActive = pathname === itemPath;

        return (
          <Menu.Item 
            as={Link}
            to={itemPath}
            key={itemPath}
            active={isActive}
            onClick={() => dispatch(toggleSidebar())}
          >
            <Icon name={item.icon} />
            {itemName}
          </Menu.Item>
        );
      })}
    </Sidebar>
  );
};

const mapStateToProps = (state) => ({
  visible: state.isSidebarVisible,
});

export default connect(mapStateToProps)(SidebarMenu);
