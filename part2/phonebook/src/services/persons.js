import axios from 'axios'
const BASE_URL = '/api/persons'

const getAll = () => {
  const request = axios.get(BASE_URL)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(BASE_URL, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${BASE_URL}/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = (id) => {
  return axios.delete(`${BASE_URL}/${id}`)
}

const persons = { getAll, create, update, remove } 

export default persons