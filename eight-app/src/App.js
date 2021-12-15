import logo from './logo.svg';
import './App.css';
import Accessibility from './Accessibility';
import { PersonProvider } from './PersonContext';
import ContextConsumer from './ContextConsumer';
import { UserProvider } from './UserContext';
import UserA from './UserA';
import { Suspense } from 'react';
import React from 'react';
// import CodeSplitting from './CodeSplitting';
const CodeSplitting = React.lazy(()=>import("./CodeSplitting"));

function App() {
  return (
    <div className="App">
      <Suspense fallback="Loading...">
      <CodeSplitting/>
      </Suspense>


      {/* <UserProvider value={{username:"aniket_m_17", password:"Anii07", 
      userid:1177, lastlogin:"1st Dec 2021 05:43"}}>
        <UserA/>
      </UserProvider> */}


      {/* <PersonProvider value={{name:"Aniket", age:24}}>
      <ContextConsumer/>
      </PersonProvider>  */}
      {/* <Accessibility/> */}
    </div>
  );
}

export default App;
