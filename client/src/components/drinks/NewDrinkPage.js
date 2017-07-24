import React, {PropTypes} from 'react';  
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';  
import * as courseActions from '../../actions/drinkActions'; 
import DrinkForm from './DrinkForm'; 
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider, List, Item, Label } from 'semantic-ui-react'



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
          <br></br>
         <Header as='h2' textAlign='center' color='blue'>
    <Header.Content>
        <Label.Group size='huge'>
    <Label>Mix Your Own <Icon color='pink' name='cocktail'/> </Label>  
  </Label.Group>
  <DrinkForm />
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