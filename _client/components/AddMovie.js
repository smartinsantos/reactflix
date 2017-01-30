import React from 'react'
import { browserHistory } from 'react-router'
import _ from 'underscore'
import toastr from 'toastr'
toastr.options = { 'positionClass': 'toast-top-center' }
// Models
import Movies from '../models/movies.model.js'
// Components
import Nav from './Nav'
import ReactStars from 'react-stars'

const AddMovie = React.createClass({
  getInitialState () {
    return {
      title: '',
      year: '',
      genre: '',
      actors: '',
      rating: '',
      fileUrl: '',
      suggestions: [],
      suggestionClass: 'hidden'
    }
  },
  handleTitle (event) {
    let value = event.target.value
    this.setState({ title: value })
    let query = `title=${value}`
    if (value.length > 0) {
      Movies.search(query)
      .then((data) => {
        if (data) {
          this.setState({ suggestions: data, suggestionClass: 'none' })
        }
      })
    }
  },
  handleYear (event) {
    this.setState({ year: event.target.value })
  },
  handleGenre (event) {
    this.setState({ genre: event.target.value })
  },
  handleActors (event) {
    this.setState({ actors: event.target.value })
  },
  handleRating (value) {
    this.setState({ rating: value })
  },
  handlePoster (event) {
    // this.setState({ year: event.target.value })
  },
  handleFormSubmit () {
    let movie = {}
    movie.title = this.state.title
    movie.year = this.state.year
    movie.genre = this.state.genre
    movie.actors = this.state.actors
    movie.rating = this.state.rating
    Movies.create(movie)
    .then((res) => {
      if (res.error) {
        toastr.error('Error Ocurred')
      } else {
        browserHistory.push('/main')
        toastr.success(`Added ' ${res.data.title} '`)
      }
    })
  },
  handleSuggestionSubmit (movieObj, year) {
    let movie = {}
    movie.title = movieObj.title
    movie.year = year
    movie.genre = movieObj.genres.toString()
    movie.actors = movieObj.actors.toString()
    movie.rating = movieObj.imdb.rating / 2
    if (movieObj.poster) {
      movie.poster_url = movieObj.poster
    }
    Movies.create(movie)
    .then((res) => {
      if (res.error) {
        toastr.error('Error Ocurred')
      } else {
        browserHistory.push('/main')
        toastr.success(`Added ' ${res.data.title} '`)
      }
    })
  },
  handleSuggestion (suggestion) {
    let title = suggestion.title
    let year = null
    if (_.isNumber(suggestion.year)) {
      year = suggestion.year
    } else {
      year = suggestion.year.from
    }
    let query = `title=${title}&year=${year}`
    Movies.getData(query)
    .then((data) => {
      if (data) { 
        this.handleSuggestionSubmit(data, year)
      } else {
        toastr.error('Sorry This Suggestion is Broken!')
      }
    })
  },
  render () {
    return (
      <div>
        <Nav />
        <div className='container addmovie'>
          <div className='form-horizontal'>
            <div className='form-group'>
              <input type='text' className='form-control' id='title' placeholder='Title' onChange={this.handleTitle} />
            </div>
            <div className='form-group'>
              <input type='text' className='form-control' id='year' placeholder='Year' onChange={this.handleYear} />
            </div>
            <div className='form-group'>
              <input type='text' className='form-control' id='genre' placeholder='Genre' onChange={this.handleGenre} />
            </div>
            <div className='form-group'>
              <input type='text' className='form-control' id='rating' placeholder='Actors' onChange={this.handleActors} />
            </div>
            <div className='form-group'>
              <label>Rating</label>
              <ReactStars
                onChange={this.handleRating}
                value={this.state.rating}
                count={5}
                size={24}
                half={false}
                color2={'#ffd700'} />
            </div>
            {
            // future implementation
            // <div className='form-group'>
            //   <label htmlFor='inputFile'>Poster</label>
            //   <input type='file' id='inputFile' onChange={this.handlePoster} />
            //   <p className='help-block'>File Name</p>
            // </div>
            }
            <div className='text-center'>
              <button
                disabled={!this.state.title}
                onClick={this.handleFormSubmit}
                type='submit'
                className='btn btn-default'>
                Save
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className={`container text-center ${this.state.suggestionClass}`}>
          <h3>Use Suggestion Instead?</h3>
          {
            _.map(this.state.suggestions, (suggestion, idx) => {
              return (
                <p key={idx} className='suggestion'>
                  <a onClick={() => this.handleSuggestion(suggestion)}>
                    {suggestion.title}
                  </a>
                </p>
              )
            })
          }
        </div>
      </div>
    )
  }
})

export default AddMovie
