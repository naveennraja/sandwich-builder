import React, {Component,Fragment} from 'react';
import "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar"
import SideDrawer  from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
     state = {
          showSideDrawer: false
     }
     togglerDrawerCloseHandle = () => {
          this.setState( { showSideDrawer: false } );
     }
     togglerDrawerHandler = () => {
          this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
     }
     render() { 
          return (<Fragment>
               <Toolbar drawerToggleClicked={this.togglerDrawerHandler}/>
               <SideDrawer open={this.state.showSideDrawer}  close={this.togglerDrawerCloseHandle}/>
               <main className="mainContainer">
                    {this.props.children}
               </main>
          </Fragment>);
     }
}
 
export default Layout;
