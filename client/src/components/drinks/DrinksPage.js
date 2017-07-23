import React, {PropTypes} from 'react';  
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';
import DrinkList from './DrinkList';
import * as actions from '../../actions/drinkActions';

class DrinksPage extends React.Component {  

    componentWillMount() {
    if (this.props.drinks[0].id == '') {
      this.props.actions.loadDrinks();

    }
  }

  render() {
    const drinks = this.props.drinks;
    return(
    <div>
   
        <div>
          <DrinkList drinks={drinks} />
        </div>
    </div>
    )
  }
}


DrinksPage.propTypes = {
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


export default connect(mapStateToProps)(DrinksPage); 