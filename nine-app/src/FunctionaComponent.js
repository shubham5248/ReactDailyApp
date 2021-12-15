import {useState} from "react";
export default()=>{

    // const stateArr=useState(0);
    // const[value, setValue]=stateArr;

    const[value, setValue]= useState(0);  // Same as above 2 lines

    const onClickIncrementHandler =()=>{
        setValue(value+1);
    }
    const onClickDecrementHandler=()=>{
        setValue(value-1);
    }
    
    return(
        <>
        <h1>Value:{value}</h1>
        <button onClick={onClickIncrementHandler }>Increment</button>
        <button onClick={onClickDecrementHandler}>Decrement</button>
        </>
    )
}