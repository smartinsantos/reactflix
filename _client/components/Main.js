import React from 'react'
import { Link } from 'react-router'

// Components
import Nav from './Nav'

const { arrayOf, shape, string } = React.PropTypes
const Main = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    }))
  },
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermChange (event) {
    this.setState({ searchTerm: event.target.value })
  },
  render () {
    return (
      <div className='main'>
        <Nav
          showSearch={true}
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange} 
        />
      </div>
    )
  }
})

export default Main

