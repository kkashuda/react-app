import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';  
import 'semantic-ui-css/semantic.css'
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/drinkActions';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider, List, Item, Label } from 'semantic-ui-react'

class HomePage extends React.Component {


  render() {
    const drinks = this.props.drinks;
    return (
      <div>
        <Header textAlign='center' color='violet' as='h2'>


      </Header>
       <Header as="h1" textAlign='center'> 
         <Label>
          <Link to={'/drinks/new'} className="btn btn-primary">
             add drink <Icon size='big' name='write' color='pink' />
          </Link> 
          </Label> 
        </Header>
      </div>
    );
  }
}

HomePage.propTypes = {
    drinks: PropTypes.array.isRequired,
      children: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  if (state.drinks.length > 0) {
    return {
      drinks: state.drinks
      
    };
  } else {
    return {
      drinks: [{id: '', title: '', description: '', source: '', steps: ''}]
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}


export default connect(mapStateToProps)(HomePage); 

