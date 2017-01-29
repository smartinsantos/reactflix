import React from 'react'
import { Link } from 'react-router'
// Components
import Nav from './Nav'

const Details = React.createClass({
  render () {
    return (
      <div className='details'>
        <Nav />
        <h1>Details Component</h1>
      </div>
    )
  }
})

export default Details
