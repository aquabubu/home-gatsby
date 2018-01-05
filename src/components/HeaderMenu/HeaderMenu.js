import React from "react";
import { connect } from "react-redux";
import Link from 'gatsby-link';
import { Container, Menu, Icon, Input, Button, Segment, Flag } from "semantic-ui-react";
import { toggleSidebar } from "../../store";

const HeaderMenu = ({ pathname, items, langKey, messages, langsMenu, dispatch }) => {
  return (
    <Container>
      <Menu size="large" pointing secondary>
        <Menu.Item as="a" className="mobile only" icon="sidebar" onClick={() => dispatch(toggleSidebar())} />
        <Menu.Item className="mobile hidden"><Icon name="spy" size="big" /></Menu.Item>
        {items.map((item) => {
          const itemName = messages[item.name];
          const itemPath = `/${langKey}${item.path}`
          const isActive = pathname === itemPath;

          return (
            <Menu.Item
              as={Link}
              className="mobile hidden"
              name={itemName}
              to={itemPath}
              key={itemPath}
              active={isActive}
            />
          );
        })}

        <Menu.Menu position='right'>
          {langsMenu.map((item) => {
            return (
              <Menu.Item as={Link} to={`${item.link}`}>
                <Flag name={item.langKey === 'en' ? 'us' : 'vn'} />
              </Menu.Item>
            );
          })}
        </Menu.Menu>
      </Menu>
    </Container>
  );
};

export default connect()(HeaderMenu);
