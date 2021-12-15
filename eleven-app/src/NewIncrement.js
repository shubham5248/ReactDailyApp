import { useState } from "react";

export default(props)=>{
    // const[value, setValue]=useState(0);
    // const onClickHandler=()=>{
    //     setValue(value +1);
    // };
    return(
        <>
        <h1>In New Increment</h1>
        <h2>Value: {props.value}</h2>
        <button onClick={props.onClickHandler}>Increment</button>
        </>
    )

}