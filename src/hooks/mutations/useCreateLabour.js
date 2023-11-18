import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

// SOLO POST,DELETE,PUT
export async function createLabourFunction(body) {
  const config = {
    withCredentials: true
  }
  const response = await axios.post(
    `${apiUrl}/autoEvaluations/labour`,
    body,
    config
  )
  return response.data
}
export async function deleteLabourFunction(){

}
export async function updateLabourFunction() {
  
}

