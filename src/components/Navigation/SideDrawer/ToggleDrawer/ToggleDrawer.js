import React from 'react';
import "./ToggleDrawer.css";

const  toggleDrawer = (props) => {
     return (
          <div className="DrawerToggle" onClick={props.clicked}>
               <div></div>
               <div></div>
               <div></div>
          </div>
     );
}
 
export default toggleDrawer;