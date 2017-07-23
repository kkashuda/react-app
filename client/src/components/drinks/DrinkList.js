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
          {<p>{drink.description}</p>}
          {
            <Segment.Group>
              {drink.ingredients.map((ingredient, i) => <Segment>{ingredient.description}</Segment>)}
            </Segment.Group>
          }
          {<p>{drink.steps}</p>}
        </Container> 
        )}
        </ul>
  );
};

DrinkList.propTypes = {  
  drinks: PropTypes.array.isRequired
};

export default DrinkList; 


