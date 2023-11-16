import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

// SOLO POST,DELETE,PUT
export async function createLabourFunction(body) {
  const response = await axios.post(`${apiUrl}/autoEvaluations/labour`, body)
  return response.data
}
