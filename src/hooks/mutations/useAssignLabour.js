import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

export async function assignLabourFunction(body) {
  const config = {
    withCredentials: true
  }
  const response = await axios.post(
    `${apiUrl}/autoEvaluations/assignLabour`,
    body,
    config
  )
  return response.data
}
