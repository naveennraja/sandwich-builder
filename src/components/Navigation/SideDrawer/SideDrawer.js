import React,{Fragment} from 'react';
import Logo from  "../../Logo/Logo";
import "./SideDrawer.css";
import Backdrop from "../../UserInterface/Backdrop/Backdrop"
import NavigationItems from "../NavigationItems/NavigationItems";
const sideDrawer = (props) => {
     let attachedClasses = `SideDrawer close`
     if(props.open){
          attachedClasses =  `SideDrawer open`
     }
     //console.log("props"attachedClasses,props);
     return (
          <Fragment>
               <Backdrop show = {props.open} clicked = {props.close}/>
               <div className={attachedClasses}>
                    <div className="LogoCont">
                         <Logo />
                    </div>
                    <nav>
                         <NavigationItems/>
                    </nav>
               </div>
          </Fragment>);
}
 
export default sideDrawer;