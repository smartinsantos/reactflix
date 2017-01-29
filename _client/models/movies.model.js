import axios from 'axios'

const MoviesModel = {
  getOne,
  getAll,
  create,
  edit,
  remove
}

function getOne (id) {
  return axios.get(`/api/movies/${id}`)
  .then((res) => {
    return res.data
  })
  .catch((err) => {
    console.log('Users Api Err: ', err)
    return err
  })
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

function create (movie) {
  return axios.post('/api/movies/', movie)
  .then((res) => {
    return res.data
  })
  .catch((err) => {
    console.log('Users Api Err: ', err)
    return err
  })
}

function edit (movie) {
  return axios.put(`/api/movies/${movie._id}`, movie)
  .then((res) => {
    return res.data
  })
  .catch((err) => {
    console.log('Users Api Err: ', err)
    return err
  })
}

function remove (id) {
  return axios.put(`/api/movies/${id}`)
  .then((res) => {
    return res.data
  })
  .catch((err) => {
    console.log('Users Api Err: ', err)
    return err
  })
}

export default MoviesModel
