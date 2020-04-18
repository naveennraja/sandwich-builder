import React from 'react';
import "./SandwichControl.css";

// Adding and Removing the sandwich ingredients 
const sandwichControl = (props) => {
     return (<div className="SandwichControl">
          <div className="Label">{props.label}</div>
          <button 
               className="Add" 
               onClick={props.addIngredients}>
          Add
          </button>
          <button 
               className="Remove"
               onClick= {props.removeIngredients}
               disabled= {props.disabledInfo}>
          Remove
          </button>
     </div>);
}
 
export default sandwichControl;