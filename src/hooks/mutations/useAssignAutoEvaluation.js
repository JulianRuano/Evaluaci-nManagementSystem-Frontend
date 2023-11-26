import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

export async function assignAutoEvaluationFunction(body) {
  const config = {
    withCredentials: true
  }
  const response = await axios.post(
    `${apiUrl}/educators/addAutoEvaluation`,
    body,
    config
  )

  return response.data
}
