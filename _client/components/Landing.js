import React from 'react'
import { Link } from 'react-router'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>ReactFlix</h1>
        <Link to='/main'>Login</Link>
      </div>
    )
  }
})

export default Landing
