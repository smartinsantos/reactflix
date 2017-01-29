import React from 'react'
import { Link } from 'react-router'
// Models
import Movies from '../models/movies.model.js'
// Components
import Nav from './Nav'
import ShowCard from './ShowCard'

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
        <div className='container'>
          <div className='text-center'>
            <Link to='/add' className='btn btn-default'>Add Movie</Link>
          </div>
          <hr />
          <div className='row'>
            {this.state.movies
              .filter((movie) => {
                return `${movie.title} ${movie.year} ${movie.genre} ${movie.actors}`.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) >= 0
              })
              .map((movie, index) => {
                return <ShowCard movie={movie} key={movie._id} />
              })
            }
          </div>
        </div>
      </div>
    )
  }
})

export default Main

