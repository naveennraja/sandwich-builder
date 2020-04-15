import React from 'react';
import "./Sandwich.css";
import SandwichIngredients from "./SandwichIngrediens/SandwichIngridients";

const Sandwich = (props) => {
     let transformedIngridients = Object.keys(props.ingridients).map((igKey) =>{
          return [...Array(props.ingridients[igKey])].map((_,i) => {
              return <SandwichIngredients key={igKey+i} type={igKey} />
          })
     }).reduce((arr,elem) => {
          return arr.concat(elem); 
     }, []);
     if(transformedIngridients.length === 0){
         transformedIngridients = <p>Please add the ingridients </p> 
     }
     console.log(transformedIngridients);
     return (  
          <div className="Sandwich">
               <SandwichIngredients type="bread-top"/>
                    {transformedIngridients}
               <SandwichIngredients type="bread-bottom"/>
          </div>
     );
}
 
export default Sandwich;