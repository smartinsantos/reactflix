import React from 'react'
import { Link } from 'react-router'

const Nav = React.createClass({
  getInitialState () {
    return {
      showForm: false
    }
  },
  toggleMovieForm () {
    this.setState({ showForm: !this.state.showForm })
  },
  render () {
    let renderedChild
    if (!this.state.showForm) {
      renderedChild = 
        <div className='text-center'>
          <button 
            className='btn btn-primary'
            onClick={this.toggleMovieForm}>
            Add Movie
          </button>
        </div>
    } else {
      renderedChild = 
        <div className='container'>
          <div className="form-horizontal">
            <div className="form-group">
              <input type="text" className="form-control" id="title" placeholder="Title" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="year" placeholder="Year" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="genre" placeholder="Genre" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="rating" placeholder="Actors" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="rating" placeholder="Rating" />
            </div>
            
            <div className="form-group">
              <label htmlFor="inputFile">Poster</label>
              <input type="file" id="inputFile" />
              <p className="help-block">File Name</p>
            </div>
            
            <div>
              <button type="submit" className="btn btn-default">Save</button>
              <button 
                className='btn btn-info'
                onClick={this.toggleMovieForm}>
                Close
              </button>
            </div>
          </div>
          
        </div>
    }
    return (
      <div className='add-btn-form'>
        {renderedChild}
      </div>
    )
  }
})

export default Nav

