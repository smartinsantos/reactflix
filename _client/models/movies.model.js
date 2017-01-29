import axios from 'axios'

const MoviesModel = {
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
  return axios.get('/api/movies/')
  .then((res) => {
    return res.data
  })
  .catch((err) => {
    console.log('Users Api Err: ', err)
    return err
  })
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



export default MoviesModel
