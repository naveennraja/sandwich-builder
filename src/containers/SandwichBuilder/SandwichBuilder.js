import React,{ Component,Fragment} from 'react';
import Sandwich from "../../components/Sandwich/Sandwich";
import SandwichControls from "../../components/Sandwich/SandwichControls/SandwichControls";
import Modal from "../../components/UserInterface/Modal/Modal";
import OrderSummary from "../../components/Sandwich/OrderSummary/OrderSummary"
const INGRIDIENT_PRICES = {
     salad :1,
     cheese : 3,
     sauce : 0.75,
     meat : 3
};

class  SandwichBuilder extends Component {
     state = {
          ingridients :{
               salad : 0,
               sauce : 0,
               cheese : 0,
               meat :0,
          },
          totalPrice : 7,
          purchasable : false,
          purchasing: false,
     }
     addIngredients = (type) => {
        const oldCount = this.state.ingridients[type];
        const updatedCount = oldCount +1;
        const updatedIngridient = {
             ...this.state.ingridients
        }
        updatedIngridient[type] = updatedCount;
        const priceAddition = INGRIDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice, ingridients: updatedIngridient})
        this.updatePurchase(updatedIngridient);        
     }
     removeIngredients = (type) => {
          const oldCount = this.state.ingridients[type];
          if(oldCount <=0 ){
               return ;
          }
          const updatedCount = oldCount- 1;
          const updatedIngridient = {
               ...this.state.ingridients
          }
          updatedIngridient[type] = updatedCount;
          const priceDedution = INGRIDIENT_PRICES[type];
          const oldPrice = this.state.totalPrice;
          const newPrice = oldPrice - priceDedution;
          this.setState({totalPrice:newPrice, ingridients: updatedIngridient})
          this.updatePurchase(updatedIngridient);
     }
     updatePurchase(updatedIngridient) {
          const total = Object.keys(updatedIngridient).map(val =>{
               return updatedIngridient[val];
          }).reduce((total,el)=>{
               return total + el;
          },0);
          this.setState({purchasable: total > 0 })
     }
     purchaseHandler = () => {
          this.setState({purchasing:true})
     }
     purchaseCancelHandler = () => {
          this.setState({purchasing:false})
     }
     purchaseContinueHandler =() =>{
          console.log("Continue with order");
     }
     render() { 
          const disabledInfo = {
               ...this.state.ingridients
          }
          for(let idx in disabledInfo){
               disabledInfo[idx] = disabledInfo[idx] <=0
          }
          return (<Fragment>
               <Modal 
               show= {this.state.purchasing}
               modalClosed= {this.purchaseCancelHandler}>
                    <OrderSummary  
                    ingredients={this.state.ingridients}
                    purchaseCancelled= {this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    price={this.state.totalPrice}
                    />
               </Modal>
               <Sandwich ingridients={this.state.ingridients}/>
               <SandwichControls
               ingrideintAdded = {this.addIngredients}
               ingrideintRemoved  = {this.removeIngredients}
               disabledAttributes = {disabledInfo} 
               price = {this.state.totalPrice}
               purchasable = {this.state.purchasable}
               orderNowClick = {this.purchaseHandler}
               />
               
          </Fragment>);
     }
}


export default SandwichBuilder;