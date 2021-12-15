import React,{Component} from "react";

export default class Accessibility extends Component{
    onButtonClickHandler=()=>{
        console.log("Button Clicked");
    }
    render(){
        return(
            <>
            <h1>I'm inside Accessibility</h1>  
            <input name={"name"} placeholder="put name here" aria-label="name" aria-required="true"></input> 
            <br /><hr/>
            <label htmlFor="name">Name:</label>
            <input id="name"></input>
            <br/>
            <button onClick={this.onButtonClickHandler}>CLick Me</button>
            <table>
                <tbody>
                <tr>
                    <td>Aniket</td>
                    <td>Sanket</td>
                </tr>
                </tbody>
            </table>
            </>
        )
    }

}