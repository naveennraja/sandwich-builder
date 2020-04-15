import React,{Fragment} from 'react';

const OrderSummary = (props) => {
     const ingredientsSummary = Object.keys(props.ingredients).map(iKey =>{
          return <li key={iKey+props.ingredients[iKey]}><span 
          style={{textTransform:"capitalize"}}>
          {iKey}</span>: {props.ingredients[iKey]}
          </li>
     });
     
     return (
          <Fragment>
               <h3> Your Order</h3>
               <p>Your sandwich contains follwing ingredients</p>
               <ul>
                    {ingredientsSummary}
               </ul>
               <p>Please continue to checkout</p>
          </Fragment>
     );
}
 
export default OrderSummary;