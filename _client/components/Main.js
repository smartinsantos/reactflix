import React from 'react'
import { Link } from 'react-router'
import _ from 'underscore'
// Models
import Movies from '../models/movies.model.js'
// Components
import Nav from './Nav'
import ShowCard from './ShowCard'

let advancedFilter = (collection, filterValue) => {
  if (filterValue.length < 1) { return collection }
  let filter = filterValue.split(/[ ]+/)
  let filterWordCount = filter.length
  let containsString = (stringProp, word) => {
    return stringProp.indexOf(word) >= 0
  }
  let filtered = []
  // iterate all movies passed in 
  _.each(collection, (movie) => {
    // iterate all the words passed in to the filter
    let wordMatch = []
    _.each(filter, (word) => {
      let lcWord = word.toLowerCase()
      let propMatch = false
      // title check
      let title = containsString(movie.title.toLowerCase(), lcWord)
      if (title) { propMatch = propMatch || true }
      // year check
      let year = containsString(movie.year.toLowerCase(), lcWord)
      if (year) { propMatch = propMatch || true }
      // genre check
      let genre = containsString(movie.genre.toLowerCase(), lcWord)
      if (genre) { propMatch = propMatch || true }
      // actor check
      let actors = containsString(movie.actors.toLowerCase(), lcWord)
      if (actors) { propMatch = propMatch || true }

      if (propMatch) { wordMatch.push([movie, propMatch, word]) }
    })
    // if the number of word matches are the same as the number of words in the filter then check if the movie can be pushed
    if (wordMatch.length === filterWordCount) {
      wordMatch.forEach((tern) => {
        // wordMatch is an array of arrays [tern0,tern1] where tern is [movie,match,word]
        if (tern[1] && !_.contains(filtered, tern[0])) {
          filtered.push(tern[0])
        }
      })
    }
  })
  return filtered
}

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
            {
              
              _.map(advancedFilter(this.state.movies, this.state.searchTerm), (movie) => {
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
