import React,{Component} from "react";

export default class PersonForm extends Component{
    state={
        name:"",
        age:0,
        mobile:0,
        List:[]
    }
    onInputChange=(event)=>{
       this.setState({[event.target.name]:event.target.value}) 
       console.log(event.target.name);
    }
    onFormSubmitHandler=(event)=>{
        event.preventDefault();
        console.log("in submit");
        console.log(this.state);
    }
    onAdd=()=>{
        const ListCopy=this.state.List;
        ListCopy.push(<h3>My Name is {this.state.name} And I'm {this.state.age} years old, My Contact no is {this.state.mobile}</h3>);
        this.setState({List:ListCopy,name:"", age:0, mobile:0})
    }
    onDeleteByIndex=(index)=>{
        const ListCopy=this.state.List;
        ListCopy.splice(index,1);
        this.setState({List:ListCopy});
    }

  render(){
      return(
          <>
          <h1>MY FORM</h1>
          <form onSubmit={this.onFormSubmitHandler}>
          <label>Name:</label>
          <input name={"name"} value={this.state.name} onChange={this.onInputChange}></input>
          <br/>
          <label>Age:</label>
          <input name={"age"} value={this.state.age} onChange={this.onInputChange}></input>
          <br/>
          <label>Mobile:</label>
          <input name={"mobile"} value={this.state.mobile} onChange={this.onInputChange}></input>
          <br/>
         <button type="submit" onClick={this.onAdd}>Submit</button>
         {this.state.List.map((element, index)=>(
             <div key={index}>
             <div>{element}</div>
             {/* <button onClick={this.onDeleteByIndex}>Delete</button> */}
             <button onClick={()=>{this.onDeleteByIndex(index);}}>Delete</button>
             </div>))}
         
         </form>
          </>
      )
  }
}