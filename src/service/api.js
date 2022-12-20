import axios from "axios"
import { getItem } from "../helpers/persistenceStorage"

axios.defaults.baseURL = 'http://localhost:3000/api/'

axios.interceptors.request.use(config => {
  const token = getItem("token")
  const authorization = token ? `Token ${token}` : ''
  config.headers.Authorization = authorization
  // console.log(config)  
  return config
})

export default axios