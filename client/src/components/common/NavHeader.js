import React, {PropTypes} from 'react';  
import { Link, IndexLink } from 'react-router';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider, Menu } from 'semantic-ui-react'

const NavHeader = () => {  
  return (
  
  <div>
      <Header icon textAlign='center'>
        <Icon.Group size='big'>
        <Icon size='small' name='lab' color='pink' />
        </Icon.Group>
      </Header>
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
