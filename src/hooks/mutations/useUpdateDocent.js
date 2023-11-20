import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

export async function updateDocentFunction({ id, values }) {
  const config = {
    withCredentials: true
  }

  const response = await axios.put(
    `${apiUrl}/educators/updateEducator/${id}`,
    values,
    config
  )
  return response.data
}
