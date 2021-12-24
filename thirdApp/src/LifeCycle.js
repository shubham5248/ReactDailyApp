import React,{Component} from "react";

export default class LifeCycle extends Component{

     constructor(){
         super(); //internallly we are invoking base Class's constructor
         console.log("In Constructor");
     }

     render(){
         console.log("In Render");
         return <h1>In LifeCycle</h1>
     }


      componentDidMount(){
          console.log("In ComponentDidMount");
      }
}