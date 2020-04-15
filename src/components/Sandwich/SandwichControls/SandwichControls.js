import React from 'react';
import "./SandwichControls.css";

import SandwichControl from "./SandwichControl/SandwichControl";

const controls = [
     {label :"Salad", type:"salad" },
     {label :"Sauce", type:"sauce" },
     {label :"Meat", type:"meat" },
     {label :"Cheese", type:"cheese" },
];
const sandwichControls = (props) => {
    return (<div className="SandwichControls">
         <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
          {controls.map(cl => (
              <SandwichControl key={cl.label}
              label={cl.label}
              type={cl.type}
              addIngredients={() => props.ingrideintAdded(cl.type)}
              removeIngredients={() => props.ingrideintRemoved(cl.type)}
              disabledInfo = {props.disabledAttributes[cl.type]}
              />           
          ))}
          <button 
               disabled = {!props.purchasable}
               className="OrderButton"
               onClick={props.orderNowClick}>Order Sandwich</button>
     </div>)
     //return (  );
}
 
export default sandwichControls;