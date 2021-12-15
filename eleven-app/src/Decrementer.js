import { useState } from "react";

export default(props)=>{
    const [value, setValue]=useState(10);
    const onClickHandler=()=>{
        setValue(value-1);
    }
    return props.render(value, onClickHandler)
}