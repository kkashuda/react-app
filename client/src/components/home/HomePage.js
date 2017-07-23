import React from 'react';
import { Link } from 'react-router';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider, List, Item } from 'semantic-ui-react'

class HomePage extends React.Component {
  render() {
    return (
      <div>
            <Header textAlign='center' color='violet' as='h2' attached='top'>
      
           <Icon.Group size='small'>
        <Icon size='big' name='write' color='pink' />
        </Icon.Group>

      </Header>

      </div>
    );
  }
}

export default HomePage;