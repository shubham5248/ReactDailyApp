import React,{Component} from "react";
export default class SampleError extends Component{
    myArr = [1,2];

    render(){
        return <h1> In SampleError {this.myArr[4].toString()}</h1>
    }
}