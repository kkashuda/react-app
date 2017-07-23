import React, {PropTypes} from 'react';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider, List, Item } from 'semantic-ui-react'

const DrinkList = ({drinks}) => {  
    debugger 
  return (
       <ul>
        {drinks.map(drink => 
        <Container>
          <Button fluid key={drink.id} active={drink && drink.id === drink.id} onClick={() => drink.id}>
            {drink.title}
          </Button>
          <Header as='h2'>{drink.title}</Header>
          {drink.description && <p>{drink.description}</p>}
          {drink.ingredients &&
            <Segment.Group>
              {drink.ingredients.map((ingredient, i) => <Segment key={i}>{ingredient.description}</Segment>)}
            </Segment.Group>
          }
          {drink.steps && <p>{drink.steps}</p>}
     
        </Container> 
        )}
    
        </ul>
  );
};

DrinkList.propTypes = {  
  drinks: PropTypes.array.isRequired
};

export default DrinkList; 


