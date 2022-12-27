import React from 'react'
import About from './About';
import Home from './Home';
import Main from './Main';
import LayoutPage from './LayoutPage';
import { BrowserRouter, Route,RouterProvider,Routes } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import NotFoundPage from './NotFoundPage';
export default function GetStringRootList() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<LayoutPage/> }>
      <Route exact path='/home' element={<Home/>}/>
      <Route path='/main' 
              element={<Main/>} 
              errorElement={<ErrorPage/>} 
              />
        <Route path='/about'  element={<About/>}/>
    </Route>
   
    <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}
