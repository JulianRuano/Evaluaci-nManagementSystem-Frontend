import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

export async function createAutoevaluatinFunction(body) {
  const config = {
    withCredentials: true
  }
  const response = await axios.post(
    `${apiUrl}/createAutoEvaluation`,
    body,
    config
  )

  return response.data
}
