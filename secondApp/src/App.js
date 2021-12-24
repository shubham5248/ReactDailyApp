
import MyFirstComponent from './MyFirstComponent';
import MySecondComponent from './MySecondComponent';

function App() {
  return (
    <div>
      <MyFirstComponent ParentComponentName={"App"}/>
     
      {/* <MySecondComponent ParentComponentName={"App"}/> */}
     
    </div>
  );
}

export default App;

