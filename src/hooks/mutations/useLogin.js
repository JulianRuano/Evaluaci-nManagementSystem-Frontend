import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

export async function loginFunction(body) {
  const response = await axios.post(`${apiUrl}/auth/login`, body)
  return response.data
}
