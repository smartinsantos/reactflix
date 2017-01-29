// Css dependencies
import 'normalize.css'
import 'toastr/build/toastr.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../dist/styles.css'

// React dependencies
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

// Components
import Landing from './components/Landing'
import Main from './components/Main'
import AddMovie from './components/AddMovie'
import EditMovie from './components/EditMovie'

const App = React.createClass({
  render () {
    return (
      <div className='app'>
        <Router history={browserHistory}>
          <Route path='/' component={Landing} />
          <Route path='/main' component={Main} />
          <Route path='/add' component={AddMovie} />
          <Route path='/details/:id' component={EditMovie} />
        </Router>
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
