import logo from './logo.svg';
import './App.css';
import ParentComponent from "./ParentComponent"
import TrueComponent from './TrueComponent';
import FalseComponent from './FalseComponent';
import ConditionalComponent from './ConditionalComponent';
import ListComponent from './ListComponent';
import Playing11 from './Playing11';
import ArrayMapping from './ArrayMapping';
import FormComponent from './FormComponent';


function App() {
  const name="Aniket";
  return (
    <>
    {/* <h1>From App</h1> */}
    {/* <FormComponent/> */}
    {/* <Playing11/> */}
    {/* <ListComponent/> */}
    {/* {name==="Aniket"?<TrueComponent/>:<FalseComponent/>} */}
    {/* {name==="Aniket" && <TrueComponent/>} */}
    {/* <ConditionalComponent/>  */}
    <ParentComponent/>
   </>
  );
}

export default App;
