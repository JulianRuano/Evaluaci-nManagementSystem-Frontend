import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

export async function updateAutoEvalFunction({ values: body, id }) {
  const config = {
    withCredentials: true
  }
  const response = await axios.put(
    `${apiUrl}/autoEvaluations/updateAutoEvaluation/${id}`,
    body,
    config
  )

  return response.data
}
