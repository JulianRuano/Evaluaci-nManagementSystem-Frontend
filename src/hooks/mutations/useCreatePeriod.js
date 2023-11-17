import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

export async function createPeriodFunction(body) {
  const config = {
    withCredentials: true
  }
  const response = await axios.post(
    `${apiUrl}/autoEvaluations/period`,
    body,
    config
  )
  return response.data
}
