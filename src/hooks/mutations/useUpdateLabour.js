import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

export async function updateLabourFunction({ values, id }) {
  const config = {
    withCredentials: true
  }
  console.log(values, id)
  const response = await axios.put(
    `${apiUrl}/autoEvaluations/labour/${id}`,
    values,
    config
  )
  return response.data
}
