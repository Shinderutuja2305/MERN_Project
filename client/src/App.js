import './App.css';
import Header from "./components/Header";
import React from 'react';
import { useState } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Loginadmin from './components/Loginadmin';
import Register from './components/Register';
import Footer from './components/Footer';
import Body from './components/Body';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Userhome from './components/Userhome';
import DataProvider from './context/DataProvider';
import Banner from './components/Banner';
import CreatePost from './components/CreatePost';
import Myblogs from './components/Myblogs';
import DetailView from './components/DetailView';
import BlogView from './components/BlogView';
import UpdateBlog from './components/UpdateBlog';
{/*
const PrivateRouting=({isAuthenticated})=>{
  return isAuthenticated ? <Outlet/> : <Navigate  to="/auth" replace/>
}
*/}
{//<Route path='/userhome' element={<PrivateRouting isAuthenticated={isAuthenticated}/>}>
}    
{//</Route> 
}

function App() {

//const [isAuthenticated]=useState(false);
  return <React.Fragment>
      <main>
        <DataProvider>
        <Routes>
          <Route path="/" element={[<Header/>,<Body/>,<Footer/>]} />
          <Route path="/admin" element={ <Loginadmin />} />
          <Route path="/home" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard/>} />

          <Route path="/auth" element={<Auth/>} />
          <Route path="/userhome" element={<Userhome/>}/>
          <Route path='/createblog' element={<Banner/>}/>

          <Route path="/create" element={<CreatePost/>}/>
          <Route path="myblogs" element={<Myblogs/>}/>
          <Route path='/details/:id' element={<DetailView/>}/>

          <Route path='/views/:id' element={<BlogView/>}/>
          <Route path='/update/:id'  element={<UpdateBlog/>}/>

        </Routes>
        </DataProvider>
      </main>

    </React.Fragment>

}
export default App;
