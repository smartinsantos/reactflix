import React from 'react'
import { browserHistory } from 'react-router'
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
      suggestion: []
    }
  },
  handleTitle (event) {
    this.setState({ title: event.target.value })
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
    // movie.poster_url = this.state.fileUrl
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
            <div className='form-group'>
              <label htmlFor='inputFile'>Poster</label>
              <input type='file' id='inputFile' onChange={this.handlePoster} />
              <p className='help-block'>File Name</p>
            </div>
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
      </div>
    )
  }
})

export default AddMovie
