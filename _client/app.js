// Css dependencies
import 'normalize.css'
import 'toastr/build/toastr.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../dist/styles.css'

// React dependencies
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// Components
import Landing from './components/Landing'
import Main from './components/Main'
import AddMovie from './components/AddMovie'

const App = React.createClass({
  render () {
    return (
      <Router history={hashHistory}>
        <div className='app'>
          <Route path='/' component={Landing} />
          <Route path='/main' component={Main} />
          <Route path='/add' component={AddMovie} />
        </div>
      </Router>
    )
  }
})

render(<App />, document.getElementById('app'))
