export default(props)=>{
    return(
        <>
        <h1>In Child</h1>
        <button onClick={props.onClickHandler}>Next Status from child</button>
        </>
    )
}