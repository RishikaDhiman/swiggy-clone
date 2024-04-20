import React from 'react'
// useRouteError is a hook.
import { NavLink, useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div className='errorPage'>
      <h1>{error.status} Error</h1>
      <h3>Sorry, {error.statusText}</h3>
      <div className='button'><NavLink to="/">Back to home</NavLink></div>
    </div>
  )
}

export default Error
