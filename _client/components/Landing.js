import React from 'react'
import { Link } from 'react-router'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>
          <Link to='/main'>ReactFlix</Link>
        </h1>
      </div>
    )
  }
})

export default Landing
