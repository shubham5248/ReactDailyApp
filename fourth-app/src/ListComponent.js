import React,{Component} from "react";


 class ListComponent extends Component{
    state={
        myList:[],
        inputValue:"",
    };

    onAdd=()=>{
        const myListCopy=this.state.myList;
        myListCopy.push(this.state.inputValue);
        this.setState({myList:myListCopy, inputValue:""});
    };
    onInputTextChange=(event)=>{
        this.setState({inputValue:event.target.value})
    }
        render(){
        return(
            <>
            <h1>My ToDo List</h1>
            <input value={this.state.inputValue} onChange={this.onInputTextChange}></input>
            <button onClick={this.onAdd}>Add Task</button>
            {this.state.myList.map((element, index)=>(
            <div key={index}><div>{element}</div>
            </div>
            ))}
            </>
        );
    }
}
export default ListComponent;