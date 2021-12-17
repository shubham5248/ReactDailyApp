// import React,{ Component } from "react";

var createReactClass = require ("create-react-class");

// class OldClassComponent extends Component{
    // state={
    //     count:0,
    // }
    // onclickHandler=()=>{
    //     this.setState({count:this.state.count +1});
    // }
//     render(){
//         return <><h1>In Test Component</h1>
                //    <h2>Count: {this.state.count}</h2>
                //    <button onClick={this.onclickHandler}>Increment</button>
                //   </>
//     }
// }

var OldClassComponent = createReactClass({
    render: function(){
        return <><h1>In Old Class Component</h1>
        <h2>name-{this.props.name}, age-{this.props.age}</h2>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.onclickIncrementHandler}>Increment</button>
        <button onClick={this.onClickDecrementHandler}>Decrement</button>
        </>
    },
    getInitialState: function(){
        return{
            count:0,
        }
    },
    onclickIncrementHandler: function(){
        this.setState({count:this.state.count +1});
    },
    onClickDecrementHandler: function(count){
        if(this.state.count<=0){
            return count;
        }else
        this.setState({count:this.state.count -1});
    }
})

export default OldClassComponent;
// in this file we have wrote the class in old JS way i.e. non-ES6 script