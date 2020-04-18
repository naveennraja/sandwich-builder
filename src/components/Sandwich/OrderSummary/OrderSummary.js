import React,{Fragment,Component} from 'react';
import Button from "../../UserInterface/Button/Buttton";

class OrdersSummary extends Component {
     state = {  }
     componentWillUpdate(){
          console.log('[Order Summary Update]')
     }
     render() { 
          const ingredientsSummary = Object.keys(this.props.ingredients).map(iKey =>{
               return <li key={iKey+this.props.ingredients[iKey]}><span 
               style={{textTransform:"capitalize"}}>
               {iKey}</span>: {this.props.ingredients[iKey]}
               </li>
          });
          
          return (
               <Fragment>
                    <h3> Your Order</h3>
                    <p>Your sandwich contains follwing ingredients</p>
                    <ul>
                         {ingredientsSummary}
                    </ul>
                    <p><b>Total Price: </b>{this.props.price}</p>
                    <p>Please continue to checkout</p>
                    <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel Order</Button>
                    <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
               </Fragment>
          );
     }
}
 
export default OrdersSummary;