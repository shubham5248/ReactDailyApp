import React,{Component} from "react";
import ChildComponent from "./ChildComponent"

class ParentComponent extends Component{
    state={
        balance:0,
    }
    onProfit=()=>{
        this.setState({balance:this.state.balance +1})
    }
    onLoss=()=>{
        if(this.state.balance===0){
            return;
        }else
        this.setState({balance:this.state.balance -1})
    }
    render(){
        return(
            <>
            <h1>Parent: {this.state.balance}</h1>
            <button onClick={this.onProfit}>Family Profit</button>
            <button onClick={this.onLoss}>Family Expenses</button>
            <ChildComponent name={"Aniket"} onProfit={this.onProfit} onLoss={this.onLoss}/>
            <ChildComponent name={"Shubham"} onProfit={this.onProfit} onLoss={this.onLoss}/>
            
            </>
        );
    }

}

export default ParentComponent;