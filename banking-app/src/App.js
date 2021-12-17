import './App.css';
import './index.css';
import Navbar from './Navbar';
import {Routes, Route} from "react-router";
import ChangePwd from './ChangePwd';
import AddPayee from './AddPayee';
import Imps from './Imps';
import Neft from './Neft';
import Rtgs from './Rtgs';

function App() {
  return (
    <div className="container-xxl">
    <Navbar/><br/>
    <Routes>
    <Route path={'/changepwd'} element={<ChangePwd/>}></Route>
    <Route path={'/addpayee'} element={<AddPayee/>}></Route>
    <Route path={'/rtgs'} element={<Rtgs/>}/>
    <Route path={'/neft'} element={<Neft/>}/>
    <Route path={'/imps'} element={<Imps/>}/>
    </Routes>
   
    </div>
  );
}

export default App;
