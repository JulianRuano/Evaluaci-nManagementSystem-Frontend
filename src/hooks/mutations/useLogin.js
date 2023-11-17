import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

export async function loginFunction(body) {
  const config = {
    withCredentials: true
  }
  const response = await axios.post(`${apiUrl}/auth/login`, body, config)
  return response.data
}
