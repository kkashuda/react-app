import React, {PropTypes} from 'react';  
import { Link, IndexLink } from 'react-router';

const NavHeader = () => {  
  return (
    <nav>
      <IndexLink to="/" 
        activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/drinks" activeClassName="active">Drinks</Link>
    </nav>
  );
};

export default NavHeader;  