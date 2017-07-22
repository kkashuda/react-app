import React, {PropTypes} from 'react';

const DrinkList = ({drinks}) => {  
  return (
      <ul className="list-group">
        {drinks.map(drink => 
          <li className="list-group-item" key={drink.id}>
            {drink.title}
          </li>
        )}
      </ul>
  );
};

DrinkList.propTypes = {  
  drinks: PropTypes.array.isRequired
};

export default DrinkList;  
