import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

export async function createPeriodFunction(body) {
  const response = await axios.post(`${apiUrl}/autoEvaluations/period`, body)
  return response.data
}