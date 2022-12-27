import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
import About from "./About";
import ErrorPage from './ErrorPage';
import Home from './Home';
import LayoutPage from "./LayoutPage";
  
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutPage />} errorElement={<ErrorPage/>}>
       <Route path="/about" element={<About/>} />
       <Route path="/home" 
              element={<Home/>} 
              loader={async ({ params }) => {
                //Intentionlly created error
                if (404 == 404) {
                  throw new Response("Not Found", { status: 404 });
                }
                return {'error':'Error occurred'};
              }}
              errorElement={<ErrorPage/>}/>

      </Route>
    )
);


export default function GetRootListWithErrorElement() {
  return (
    <RouterProvider router={router} />
  )
}
