import React,{Component} from "react";


export default class FormComponent extends Component{
    state={
        name:"",
        age:0,
    };
    render(){
        return(
            <>
            <h1>Person Form</h1>
            <label>Name:</label>
            <input/>
            <br/>
            <label>Age::</label>
            <input/>
            </>
        )
    }

}