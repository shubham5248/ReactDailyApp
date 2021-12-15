
import { Routes, Route } from 'react-router-dom';

import Body from './Body';
import DynamicClass3 from './DynamicClass3';
import Footer from './Footer';
import Heading from './Heading';
import Navbar from './Navbar';
import PersonForm from './PersonForm';
import Post from './Post';
import Todo from './Todo';



function App() {
  return (
    <div className="container-xxl">
    <Heading/>
    <Navbar/>
    <Routes>
      <Route path={'/home'} element={<Body/>}/>
      <Route path={'/form'} element={<PersonForm/>}/>
      <Route path={'/result'} element={<DynamicClass3/>}/>
      <Route path={'/post'} element={<Post/>}/>
      <Route path={'/todo'} element={<Todo/>}/>
    </Routes>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <Footer/>
   </div>
  );
}

export default App;
