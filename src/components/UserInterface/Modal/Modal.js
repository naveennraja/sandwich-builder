import React,{Fragment} from 'react';
import Backdrop from "../Backdrop/Backdrop"
import "./Modal.css";

const modal = (props) => {
     return ( <Fragment>
          <Backdrop 
          show={props.show}
          clicked={props.modalClosed}/>
     <div 
          style={{
               transform : props.show ? 'translateY(0)' : "translateY(-100vh)",
               opacity: props.show ? '1' : '0'
          }}
     className="Modal">
          {/* <div className="mask"/> */}
          {props.children}
     </div>
     </Fragment>);
}
 
export default modal;