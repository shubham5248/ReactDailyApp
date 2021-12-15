import Radium from "radium";
const RadiumDemo=()=>{
    return <div style={[store.div]}>
    <h1>In RadiumDemo</h1> 
    <button style={[store.baseButton, store.primaryButton]}>Primary  Button</button>
    <br/><br/>
    <button style={[store.baseButton, store.secondaryButton]}>Secondary  Button</button>
    <br/><br/>
    <button style={[store.baseButton, store.ternaryButton]}>Ternary  Button</button>
    </div>
};
const store={
    baseButton:{
        color:"white",
    },
    primaryButton:{
        backgroundColor:"#379683",
    },
    secondaryButton:{
        backgroundColor:"#501b1d",
    },
    ternaryButton:{
        backgroundColor:"blue",
    },
    div:{
        backgroundColor:"#557a95",
    }
}

export default Radium(RadiumDemo);