import { useState } from "react";
import OnlineOrder1Child from "./OnlineOrder1Child";

const OnlineOrder1 =(props)=>{
    const status=["Order Placed","Pending","Preparing","Out for Delivery","Delivered"]
    const [value, setValue]=useState(0);        // 1st useState
    const [newValue, setNewValue]=useState(4);  // 2nd useState
    const onClickHandler=()=>{                 // handler for 1st useState
        setValue(value+1);
    }
    const onClickNewHandler=()=>{               // handler for 2nd useState
        setNewValue(newValue-1);
    }
    return(
        <>
        <h1>Online Orders</h1>
        <div>current status:{status[value]}</div>
        <button onClick={onClickHandler}>Next status</button> 
        
        <div>current status:{status[newValue]}</div>
        <button onClick={onClickNewHandler}>Previous status</button>

        <OnlineOrder1Child onClickHandler={onClickHandler}/>
        </>
    )
}
export default OnlineOrder1;