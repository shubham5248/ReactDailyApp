import React,{Component} from "react";

class ChildComponent extends Component{
    state={
        balance:0,
    }
    onChildProfit=()=>{
        this.setState({balance:this.state.balance +1})
    }
    onChildLoss=()=>{
        if(this.state.balance===0){
            return;
        }else
        this.setState({balance:this.state.balance -1})
    }
    
   render(){
        const{name, onProfit, onLoss}=this.props;
        
       const totalProfit = () => {
            this.onChildProfit();
            onProfit();
        }
        const totalLoss = () =>{
            this.onChildLoss();
            onLoss();
        }
        
        return(
            <>
           <h1>{name}:{this.state.balance}</h1>
           {/* <button onClick={onProfit}>Profit</button> */}
           <button onClick={totalProfit}>Profit</button>
           {/* <button onClick={onLoss}>Expenses</button> */}
           <button onClick={totalLoss}>Expenses</button>
            </>

        );
    }

}
export default ChildComponent;
