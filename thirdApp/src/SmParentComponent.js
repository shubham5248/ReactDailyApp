import React,{Component} from "react";
import SmChildComponent from "./SmChildComponent";


class SmParentComponent extends Component{
    state={
        balance:0,
    };
    onProfit=()=>{
        this.setState({balance:this.state.balance +1})
    }
    onLoss=()=>{
        this.setState({balance:this.state.balance -1})
    }
    render(){
        return (
            <>
            <h1>Parent : {this.state.balance}</h1>
            <button onClick={this.onProfit}>Family Profit</button>
            <button onClick={this.onLoss}>Family Loss</button>
            <SmChildComponent name={"Aniket"} onProfit={this.onProfit} onLoss={this.onLoss}/>
            <SmChildComponent name={"Sanket"} onProfit={this.onProfit} onLoss={this.onLoss}/>
            </>
        )
    }

}
export default SmParentComponent;