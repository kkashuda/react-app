import 'babel-polyfill'; 
import 'semantic-ui-css/semantic.css';
import React, { Component, PropTypes } from 'react';
import '../App.css';
import NavHeader from './common/NavHeader';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'


class App extends React.Component {  
  render() {
    return (
      <div className="container-fluid">
        <NavHeader />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {  
  children: PropTypes.object.isRequired
};

export default App;