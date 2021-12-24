import MyFirstComponent from './MyFirstComponent';
import MySecondComponent from './MySecondComponent';
import PropsValidate from "./PropsValidate";
function App() {
  const name="Aniket"; //defining prop here for component1
  const age=24;
  const job="Developer";
  
  const name1="Shubham"; //defining prop here for component2
  const age1=22;
  const job1="Tester";
  return (
    <div>  
      {/* <PropsValidate name={"Aniket"} age={24} symbol={"ani"} rollnumber={"RN17"} myArr={[1,2,3,4]} 
      myObj={{name:"anil", age:30, mobile:"1234567890"}}> </PropsValidate> */}
      {/* <span>Hello I'm Children</span>  */}

      {/* <h1>Hello {name1 && name1.length? name:"world"}</h1> */}
      
      <MyFirstComponent name={name} age={age} job={job}></MyFirstComponent>  
         <h3>It's React children element 1</h3>

      {/* <MySecondComponent name={name1} age={age1} job={job1}></MySecondComponent>  */}
      {/* <h3>It's React children element 2</h3> */}
      
      </div>
  );                     //declaring prop here
}

export default App;
