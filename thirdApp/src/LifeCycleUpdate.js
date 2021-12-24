import React,{Component} from "react";
import LifeCycleUnmount from "./LifeCycleUnmount";

export default class LifeCycleUpdate extends Component{
    state={
        showText:true,
    };
    onClickHandler=()=>{
        this.setState({showText: !this.state.showText });
    };
    render(){
        // console.log("In Render");
        return(
            <>
            {this.state.showText && (
                <>
            <h1>In LifeCycleUpdate</h1>
            <LifeCycleUnmount/>
            </>
            )}
            <button onClick={this.onClickHandler}>Toggle</button>
            </>
        );
    }
    componentDidUpdate(){
        console.log("In componentDidUpdate");
    }

 
}