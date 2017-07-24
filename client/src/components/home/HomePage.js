import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/drinkActions';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider, List, Item } from 'semantic-ui-react'

class HomePage extends React.Component {


  render() {
    const drinks = this.props.drinks;
    return (
      <div>
        <Header textAlign='center' color='violet' as='h2' attached='top'>

           <Icon.Group size='small'>
        <Icon size='big' name='write' color='pink' />
        </Icon.Group>

      </Header>
       <h1> 
          <Link to={'/drinks/new'} className="btn btn-primary">
            + drink
          </Link> 
        </h1>
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

