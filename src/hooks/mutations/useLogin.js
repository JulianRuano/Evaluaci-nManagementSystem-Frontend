import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'
import { init } from '../../../js/funciones.js'


export async function loginFunction(body) {
  const config = {
    withCredentials: true
  }
  const response = await axios.post(`${apiUrl}/auth/login`, body, config)
  console.log(response.data.payload.identification)
  init(response.data.payload.identification)
  
  return response.data
}
