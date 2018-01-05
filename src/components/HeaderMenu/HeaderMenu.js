import React from "react";
import { connect } from "react-redux";
import Link from 'gatsby-link';
import { Container, Menu, Icon, Input, Button, Segment, Flag } from "semantic-ui-react";
import { toggleSidebar } from "../../store";

const HeaderMenu = ({ pathname, Link, items, inverted, dispatch }) => {
  return (
    <Container>
      <Menu size="large" pointing secondary inverted={inverted}>
        <Menu.Item as="a" className="mobile only" icon="sidebar" onClick={() => dispatch(toggleSidebar())} />
        <Menu.Item className="mobile hidden"><Icon name="spy" size="big" /></Menu.Item>
        {items.map((item) => {
          const active = (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
          return (
            <Menu.Item
              as={Link}
              className="mobile hidden"
              name={item.name}
              to={item.path}
              key={item.path}
              active={active}
            />
          );
        })}

        <Menu.Menu position='right'>
          <Menu.Item as={Link} to="/en">
            <Flag name='us' />
          </Menu.Item>
          <Menu.Item as={Link} to="/vi">
            <Flag name='vn' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Container>
  );
};

export default connect()(HeaderMenu);
