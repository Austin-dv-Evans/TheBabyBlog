import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-fount">
      <h2>Sorry</h2>
      <p>That Page Cannot Be Fount</p>
      <Link to='/'>Back to the homepage...</Link>
    </div>
  )
}

export default NotFound
