import React from 'react'
import { useRouteError } from 'react-router-dom'
export default function ErrorPage() {
  const error=useRouteError();
  console.log(error);
  return (
    <div>
    <h2>ErrorPage</h2>
    {error.statusText}
    </div>
  )
}
