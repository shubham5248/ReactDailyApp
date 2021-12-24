import React,{Component} from "react";

export default class DynamicClass2 extends Component{
    state={
        isTrue:true,
        colorList:["yellow","violet","brown","orange","green","silver","blue"],
        incrementer:0,
    }
    onClickSubmit=()=>{
        this.setState({isTrue: !this.state.isTrue})
    }
    onClickIncrementer=()=>{
        this.setState({incrementer:(this.state.incrementer+1)%7})
    }
    render(){
        return(
            <>
            <h1 className={this.state.isTrue?"my-true-div":"my-false-div"}>Your Form is {this.state.isTrue?"Successfully Submitted":"Not Submitted"}</h1>
            <button onClick={this.onClickSubmit}>Submit Form</button>
            <br/>
            <br/>
            <h1 style={{backgroundColor:this.state.colorList[this.state.incrementer]}}>Seven Colors of Rainbow</h1>
            <button onClick={this.onClickIncrementer}>Change Color</button>
            </>
        )
    }
    

}