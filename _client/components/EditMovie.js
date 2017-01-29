import React from 'react'
import toastr from 'toastr'
// Models
import Movies from '../models/movies.model.js'
// Components
import Nav from './Nav'
import ReactStars from 'react-stars'

const EditMovie = React.createClass({
  getInitialState () {
    return {
      movie: {}
    }
  },
  componentDidMount () {
    Movies.getOne(this.props.params.id)
    .then((res) => {
      if (!res.error) {
        this.setState({ movie: res.data })
      }
    })
  },
  handleTitle (event) {
    this.setState({ 
      movie: { title: event.target.value }
    })
  },
  handleYear (event) {
    this.setState({ 
      movie: { year: event.target.value }
    })
  },
  handleGenre (event) {
    this.setState({ 
      movie: { genre: event.target.value }
    })
  },
  handleActors (event) {
    this.setState({ 
      movie: { actors: event.target.value }
    })
  },
  handleRating (value) {
    this.setState({ 
      movie: { rating: event.target.value }
    })
  },
  handlePoster (event) {
    // this.setState({ year: event.target.value })
  },
  handleFormSubmit () {
    Movies.edit(this.state.movie)
    .then((res) => {
      if (res.error) {
        toastr.error('Error Ocurred') 
      } else {
        toastr.success(`Edited ' ${movie.title} '`) 
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
              <input type='text' className='form-control' id='title' placeholder='Title' value={this.state.movie.title} onChange={this.handleTitle} />
            </div>
            <div className='form-group'>
              <input type='text' className='form-control' id='year' placeholder='Year' value={this.state.movie.year} onChange={this.handleYear} />
            </div>
            <div className='form-group'>
              <input type='text' className='form-control' id='genre' placeholder='Genre' value={this.state.movie.genre} onChange={this.handleGenre} />
            </div>
            <div className='form-group'>
              <input type='text' className='form-control' id='rating' placeholder='Actors' value={this.state.movie.actors} onChange={this.handleActors} />
            </div>
            <div className='form-group'>
              <label>Rating</label>
              <ReactStars
                onChange={this.handleRating}
                value={this.state.movie.rating}
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
                disabled={!this.state.movie.title}
                onClick={this.handleFormSubmit}
                type='submit'
                className='btn btn-default'>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default EditMovie
