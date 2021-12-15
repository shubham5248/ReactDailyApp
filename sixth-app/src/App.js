import logo from './logo.svg';
import './App.css';
import React from 'react';
import Heading from './Heading';
import Navbar from './Navbar';
import Footer from './Footer';
import { Routes, Route } from 'react-router';
import { Suspense } from 'react';
import Buffer from './Buffer';
import ErrorBoundry from './ErrorBoundry';
import SampleError from './SampleError';
import FragmentSample from './FragmentSample';
// import Post from './Post';
const Post = React.lazy(()=>import("./Post"));
// import Todo from './Todo';
const Todo = React.lazy(()=>import("./Todo"));

function App() {
  return (
    <div className="container-xxl">
      <Heading/>
      <Navbar/>
      {/* <FragmentSample/> */}
      {/* <ErrorBoundry>
        <SampleError/>
      </ErrorBoundry> */}

      <Suspense fallback={<Buffer/>}>
      <Routes>
        <Route path={'/post'} element={<Post/>}/>
        <Route path={'/todo'} element={<Todo/>}/>
      </Routes>
      </Suspense>
      {/* <Footer/> */}
      
    </div>
  );
}

export default App;
