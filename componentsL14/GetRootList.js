import React from 'react'
import { BrowserRouter as Router, useRoutes} from 'react-router-dom'
import About from './About';
import Home from './Home';
import LayoutPage from './LayoutPage';
import Main from './Main';

function GetRootList() {
  const routes = useRoutes([
    {
      path: '/', element: <LayoutPage />,
      children: [{ path: '/home', element: <Home /> },
      { path: '/main', element: <Main /> },
      { path: '/about', element: <About /> }
      ]
    }
  ]);
  return (routes);
}

const GetLinkWrapper=()=>{
  return (<Router>
          <GetRootList/>
          </Router>)
}
export default GetLinkWrapper;


