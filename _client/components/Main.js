import React from 'react'
import { Link } from 'react-router'

//Models
import Movies from '../models/movies.model.js'
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
      searchTerm: '',
      movies: []
    }
  },
  componentDidMount () {
    Movies.getAll()
    .then((res) => {
      if (!res.error) {
        this.setState({ movies: res.data })
      }
    })
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
        {this.state.movies}
      </div>
    )
  }
})

export default Main

