import { useEffect, useState } from "react"
import useMyLog from "./useMyLog";
import useUserStatus from "./useUserStatus";

export default ()=>{
    const[value, setValue]= useState(0);
    const[newValue, setNewValue]= useState(0);

    // useMyLog(value);
    // useMyLog(newValue);

    const UserStatus = useUserStatus(value);
    
    
    const onClickHandler =()=>{
        setValue(value+1);
    }
    const onNewClickHandler =()=>{
        setNewValue(newValue+1);
    }

// useEffect(()=>{
//     console.log("rendered"); 
// })                          // execute everytime after component gets rendered/updated

// useEffect(()=>{
//     console.log("rendered");
// },[])                        //execute only once after component is rendered

useEffect(()=>{
    console.log("value updated");
    return ()=>{
        //clean up
        console.log("clean up"); // it will execute in useEffecet very 1st even though it is at last
    }
},[value])                      // execute everytime when value will get updated

    return(
        <>
        <h1>useEffect example component</h1>
        <div>User Status: {UserStatus}</div>
        <div>Value: {value}</div>
        <div>New Value: {newValue}</div>
        <button onClick={onClickHandler}>Click Me</button>
        <button onClick={onNewClickHandler}>Click Me for new value</button>
        </>
    )
}