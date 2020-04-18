import React from 'react';
import "../Toolbar/Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import ToggleDrawer from  "../SideDrawer/ToggleDrawer/ToggleDrawer";
const toolbar = (props) => {
     return ( 
          <header className="Toolbar">
               <ToggleDrawer clicked={props.drawerToggleClicked}/>
               <Logo />
               <nav className="DesktopOnly">
                    <NavigationItems/>
               </nav>
          </header>
     );
}
 
export default toolbar;