import 'babel-polyfill'; 

import React, { Component, PropTypes } from 'react';
import logo from '../logo.svg';
import '../App.css';
import NavHeader from './common/NavHeader';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'


class App extends React.Component {  
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {  
  children: PropTypes.object.isRequired
};

export default App;