import React from 'react'
import { Link } from 'react-router'
// Models
import Movies from '../models/movies.model.js'
// Components
import Nav from './Nav'

const Main = React.createClass({
  getInitialState () {
    return {
      movies: [],
      searchTerm: ''
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
          showSearch
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange} 
        />
        <div className='text-center'>
          <Link to='/add' className='btn btn-default'>Add Movie</Link>
        </div>
        <pre><code>{JSON.stringify(this.state.movies)}</code></pre>
      </div>
    )
  }
})

export default Main

