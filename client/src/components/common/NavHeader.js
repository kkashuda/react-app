import React, {PropTypes} from 'react';  
import { Link, IndexLink } from 'react-router';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider, Menu } from 'semantic-ui-react'

const NavHeader = () => {  
  return (
  
  <div>
    <Menu>
      <Menu.Item as={Link} to='/'>
        Home
      </Menu.Item>
      <Menu.Item as={Link} to='/drinks'>
        View Drinks
      </Menu.Item>
    </Menu>
  </div>
  );
};

export default NavHeader;  
