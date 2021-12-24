import React,{Component} from "react";

export default class DynamicClass extends Component{
    state={
         isTrue:true,
         colorList:["red", "yellow","blue","green","orange"],
         incrementer:0,
    }
    onToggleClickHandler=()=>{
        this.setState({isTrue: !this.state.isTrue})
    }
    onChangeColor=()=>{
        this.setState({incrementer:(this.state.incrementer+1)%5})
    }
   render(){
       return(
           <>
           <h1 className={this.state.isTrue? "my-true-div":"my-false-div"}>
               In div with {this.state.isTrue ? "true":"false"} Condition</h1>
           <button onClick={this.onToggleClickHandler}>Toggle</button>
           <br/><br/>
           <h1 style={{backgroundColor:this.state.colorList[this.state.incrementer]}}>
               In dynamic style div</h1>
           <button onClick={this.onChangeColor}>Update Color</button>
           </>
       )
   }
}