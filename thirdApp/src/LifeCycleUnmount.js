import React,{Component} from "react";

export default class LifeCycleUnmount extends Component{
    render(){
        console.log("in render");
        return <h1>In LifeCycleUnmount</h1>;
    }

    componentWillUnmount(){
        console.log("In componentWillUnmount");
    }

     
}