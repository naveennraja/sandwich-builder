import React, {Component} from 'react';
import "./SandwichIngridients.css";
import PropTypes from "prop-types";
class SandwichIngredients extends Component {
     state = {  }
     render() { 
          let ingridients = null;
          switch(this.props.type){
               case "bread-bottom": {
                    ingridients = <div className="BreadBottom"></div>
                    break;
               }
               case "bread-top": {
                    ingridients = <div className="BreadTop">
                         <div className="Seeds1"></div>
                         <div className="Seeds2"></div>
                    </div>
                    break;
               }
               case "meat" :{
                    ingridients = <div className="Meat"></div>
                    break;
               }
               case "cheese" :{
                    ingridients = <div className="Cheese"></div>
                    break;
               }
               case "sauce" :{
                    ingridients = <div className="Bacon"></div>
                    break;
               }
               case "salad" :{
                    ingridients = <div className="Salad"></div>
                    break;
               }
               default : ingridients = null;
          
          }
     
          return ingridients
     }
}
SandwichIngredients.propTypes = {
     type : PropTypes.string.isRequired
};
export default SandwichIngredients;