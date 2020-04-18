import React from 'react';
import "./NavigationItem.css";
// Creating a sfc for links 
const navigationItem = (props) => {
     return (
          <li className="NavigationItem">
               <a href={props.link}
               className={props.active ? "active" : "" }>{props.children}</a>
          </li>
     );
}


export default navigationItem;