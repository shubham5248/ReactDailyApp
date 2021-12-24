import React,{Component} from "react";

class SmChildComponent extends Component{
    render(){
        const{name,onProfit,onLoss}=this.props;
        return (
            <><h1>{name}</h1>
            <button onClick={onProfit}>Profit</button>
            <button onClick={onLoss}>Loss</button>
            </>
        )
    }

}
export default SmChildComponent;