import React,{Fragment,Component} from 'react';
import Backdrop from "../Backdrop/Backdrop"
import "./Modal.css";

class Modal extends Component {
     state = {  }
     shouldComponentUpdate(nextProps, nextState) {
          return nextProps.show !== this.props.show
     }
     componentWillUpdate() {
          console.log("[Modal will update]");
     }
     render() { 
          return ( <Fragment>
               <Backdrop 
               show={this.props.show}
               clicked={this.props.modalClosed}/>
          <div 
               style={{
                    transform : this.props.show ? 'translateY(0)' : "translateY(-100vh)",
                    opacity: this.props.show ? '1' : '0'
               }}
          className="Modal">
               {/* <div className="mask"/> */}
               {this.props.children}
          </div>
          </Fragment>);
     }
}
 
export default Modal;