import React from 'react';
import logoImg from "../../assets/logo.png";
import "./Logo.css";
const logo = (props) => {
     return (<div className="Logo">
          <img src={logoImg}/>
     </div>);
}
 
export default logo;