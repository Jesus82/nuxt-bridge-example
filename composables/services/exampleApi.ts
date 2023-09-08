import axios from 'axios'

export const useExampleApi = () => {

  const exampleApiClient = axios.create({
    baseURL: `https://swapi.dev/api`,
  })

  // Countries Endpoints
  const fetchPeople = () => {
    return exampleApiClient.get('/people')
  }
  return {
    fetchPeople
  }
}
