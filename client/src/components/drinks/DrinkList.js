import React, {PropTypes} from 'react';

const DrinkList = ({drinks}) => {  
    debugger 
  return (
      <ul className="list-group">
        {drinks.map(drink => 
          <li className="list-group-item" key={drink.id}>
            {drink.source}
          </li>
        )}
      </ul>
  );
};

DrinkList.propTypes = {  
  drinks: PropTypes.array.isRequired
};

export default DrinkList;  
