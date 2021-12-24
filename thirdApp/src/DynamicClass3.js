import React,{Component} from "react";

export default class DynamicClass3 extends Component{
    state={
        percentage:0,
        result:"Invalid",
        color:"white",
    }
    onPercentageChangeHandler=(event)=>{
        this.setState({percentage:event.target.value})
    }
    onCheckResultHandler=()=>{
        const{result, color}=this.calculateResult(this.state.percentage)
        this.setState({ result:result, color:color})
    }
     calculateResult=(percentage)=>{
        //  let result="Invalid";
        let resultObject={
            result:"Invalid",
            color:"white",
        }
         if(percentage>=0 && percentage<35){
            //  result="Fail";
            resultObject={
                result:"Fail",
                color:"red",
            }
         }else if(percentage>=35 && percentage<=50){
            //  result="Just Pass";
            resultObject={
                result:"Just Pass",
                color:"orange",
            }
         }else if(percentage>50 && percentage<=60){
            //  result="Second Pass";
            resultObject={
                result:"Second class",
                color:"yellow",
            }
         }else if(percentage>60 && percentage<=70){
            //  result="First Class";
            resultObject={
                result:"First class",
                color:"green",
            }
         }else if(percentage>70 && percentage<=100){
            //  result="Distinction";
            resultObject={
                result:"Distinction",
                color:"violet",
            }
         }
         return resultObject;
        }
    
        render(){
        return(
            <>
            <h3>Put Your Percentage here:</h3>
            <input value={this.state.percentage} onChange={this.onPercentageChangeHandler}></input>
            <button onClick={this.onCheckResultHandler}>Check Result</button>
            <br/><br/>
            <h2 style={{backgroundColor:this.state.color}}>You Result is:{this.state.result}</h2>
            </>
        )
    }
    
    

}