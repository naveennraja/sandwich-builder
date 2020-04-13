import React from 'react';
import "./Sandwich.css";
import SandwichIngredients from "./SandwichIngrediens/SandwichIngridients";

const Sandwich = (props) => {
     console.log(props);
     const transformedIngridients = Object.keys(props.ingridients).map((igKey) =>{
          return [...Array(props.ingridients[igKey])].map((_,i) => {
              return <SandwichIngredients key={igKey+i} type={igKey} />
          })
     })
     return (  
          <div className="Sandwich">
               <SandwichIngredients type="bread-top"/>
                    {transformedIngridients}
               <SandwichIngredients type="bread-bottom"/>
          </div>
     );
}
 
export default Sandwich;