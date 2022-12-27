import React from 'react'
import { Outlet,Link } from 'react-router-dom'

export default function LayoutPage() {
  return (
    <div>LayoutPage
    <ul>
    <li><Link to='/home'>Home</Link></li>
    <li><Link to='/main'>Main</Link></li>
    <li><Link to='/about'>About</Link></li>
    </ul>
    <Outlet/>
    </div>
  )
}
