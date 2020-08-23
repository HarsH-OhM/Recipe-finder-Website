import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
           <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
         <li> <NavLink to="/food">Food</NavLink></li>
         <li> <NavLink to="/about">About</NavLink></li>
         <li> <NavLink to="/contact">Contact</NavLink></li>
          </ul>
       </div>
    );
}
 
export default Navigation;