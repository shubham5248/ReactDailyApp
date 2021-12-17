import logo from "./logo.svg";
import "./App.css";
// import "./style.scss";   //here we inported scss file========<>
import NormalProp from "./NormalProp";
import Incrementer from "./Incrementer";
import Increment from "./Increment";
import NewIncrement from "./NewIncrement";
import Decrementer from "./Decrementer";
import Decrement from "./Decrement";
import NewDecrement from "./NewDecrement";
import DemoComponent from "./DemoComponent";
import Reconciliation from "./Reconciliation";
import Reconciliation1 from "./Reconciliation1";
import Sasscomponent from "./Sasscomponent";
import { useState } from "react";
import ConditionalComponent from "./ConditionalComponent";
import RadiumDemo from "./RadiumDemo";
import FlowDemo from "./FlowDemo";
import OldClassComponent from "./OldClassComponent";


function App() {
  // const [showComponent, setShowComponent]= useState(true);
  // const onClickHandler=()=>{
  //   setShowComponent(!showComponent);
  // }
  return (
    <div className="App">
      {/* <button onClick={onClickHandler}>Show Component</button>
      {showComponent && <ConditionalComponent/>} */}
      {/* <Sasscomponent/> */}
      {/* <RadiumDemo/> */}
      {/* <FlowDemo/> */}
      <OldClassComponent name={"aniket"} age={24}/>
      {/* <Reconciliation1 /> */}
      {/* <Reconciliation /> */}
      {/* <DemoComponent/> */}

      {/* <NormalProp render={(someValue)=>{return "old name "+ someValue}}/> */}

      {/* <Incrementer render={(value, onClickHandler)=>{
        return <Increment value={value} onClickHandler={onClickHandler}/>}}/>

      <Incrementer render={(value, onClickHandler)=>{
        return <NewIncrement value={value} onClickHandler={onClickHandler}/>
      }}/>   */}

      {/* <Decrementer render={(value, onClickHandler)=>{
        return <Decrement value={value} onClickHandler={onClickHandler}/>
      }}/>

      <Decrementer render={(value, onClickHandler)=>{
        return <NewDecrement value={value} onClickHandler={onClickHandler}/>
      }}/> */}
    </div>
  );
}

export default App;
