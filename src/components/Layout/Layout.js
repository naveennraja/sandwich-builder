import React, {Fragment} from 'react';
import "./Layout.css";
const layout = (props) => {
     return (
     <Fragment>
          <div> Toolbar, SideDrawer, Backdrop</div>
          <main className="mainContainer">
               {props.children}
          </main>
     </Fragment>);
}

export default layout;