import React,{ Component,Fragment} from 'react';
import Sandwich from "../../components/Sandwich/Sandwich";
class  SandwichBuilder extends Component {
     state = {
          ingridients :{
               salad : 1,
               bacon : 1,
               cheese : 3,
               meat :2,
          }
     }
     render() { 
          return (<Fragment>
               <Sandwich ingridients={this.state.ingridients}/>
               <div> Sandwich Controls </div>
          </Fragment>);
     }
}


export default SandwichBuilder;