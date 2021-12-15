import React,{Component} from "react";

export default class Playing11 extends Component{
    state={
        myPlaying11:[],
        playerName:"",
    }
    onPlayerAdd=()=>{
        const myPlaying11Copy=this.state.myPlaying11;
        myPlaying11Copy.push(this.state.playerName);
        this.setState({myPlaying11:myPlaying11Copy, playerName:""})
    }
    onPlayerNameText=(event)=>{
        this.setState({playerName:event.target.value})
    }
    render(){
        return(
            <>
            <h1>Today's playing Squad:</h1>
            <input value={this.state.playerName} onChange={this.onPlayerNameText}></input>
            <button onClick={this.onPlayerAdd}>Add Player</button>
            {this.state.myPlaying11.map((element, index)=>(
                <div key={index}><div>{element}</div></div>
                
                ))}
            </>
        );
    }
}