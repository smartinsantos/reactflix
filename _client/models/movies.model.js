import axios from 'axios'

export default MoviesModel

function MoviesModel () {
  const model = {
    getOne,
    getAll,
    create,
    edit,
    remove
  }

  function getOne () {
    console.log('getOne')
    return 'hello'
  }

  function getAll () {
    return
  }

  function create () {
    return
  }

  function edit () {
    return
  }

  function remove () {
    return
  }

  return model
}
