import React, {PropTypes} from 'react';  
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';  
import * as courseActions from '../../actions/drinkActions';  
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider, List, Item } from 'semantic-ui-react'



class NewDrinkPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drink: {
        title: '', 
        description: '', 
        source: '', 
        steps: ''
      },
      saving: false
    };

  }

   render() {
    return (
      <div>
         <Header as='h2' textAlign='center' color='blue'>
    <Header.Content>
        
      CREATE DRINK  <Icon color='blue' name='cocktail'/>
    </Header.Content>
  </Header>
    
      </div>
    );
   }
}

NewDrinkPage.propTypes = {  
  actions: PropTypes.object.isRequired
};


function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}


export default connect(mapDispatchToProps)(NewDrinkPage);  