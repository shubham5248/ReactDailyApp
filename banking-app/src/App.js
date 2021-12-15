import './App.css';
import './index.css';
import Navbar from './Navbar';
import {Routes, Route} from "react-router";
import ChangePwd from './ChangePwd';
import AddPayee from './AddPayee';
import Imps from './Imps';
import Neft from './Neft';
import Rtgs from './Rtgs';
import Form from './Form';
import NavbarDemo from './NavbarDemo';




function App() {
  return (
    <div className="container-xxl">
      {/* <Form/> */}
     {/* <AddPayee/>  */}
     {/* <Imps/> */}
     {/* <Neft/> */}
     {/* <Rtgs/> */}
    <Navbar/><br/>
    {/* <NavbarDemo/> */}
   
    
    <Routes>
    <Route path={'/changepwd'} element={<ChangePwd/>}></Route>
    <Route path={'/addpayee'} element={<AddPayee/>}></Route>
    </Routes>
   
    </div>
  );
}

export default App;
