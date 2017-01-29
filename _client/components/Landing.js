import React from 'react'
import { Link } from 'react-router'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing text-center'>
        <h1>ReactFlix</h1>
        <p>Hello Hello!</p>
        <Link to='/main'>Login</Link>
      </div>
    )
  }
})

export default Landing
