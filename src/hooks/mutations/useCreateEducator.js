import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

// SOLO POST, DELETE, PUT

// POST
export async function createEducatorFunction(body) {
  try {
    const config = {
      withCredentials: true
    }

    const response = await axios.post(`${apiUrl}/educators`, body, config)

    return response.data
  } catch (error) {
    throw new Error('Error creating educator')
  }
}

// PUT
export async function updateEducatorFunction(educatorId, body) {
  try {
    const config = {
      withCredentials: true
    }

    const response = await axios.put(
      `${apiUrl}/educators/${educatorId}`,
      body,
      config
    )

    return response.data
  } catch (error) {
    throw new Error('Error updating educator')
  }
}

// DELETE
export async function deleteEducatorFunction(educatorId) {
  try {
    const config = {
      withCredentials: true
    }

    const response = await axios.delete(
      `${apiUrl}/educators/${educatorId}`,
      config
    )

    return response.data
  } catch (error) {
    throw new Error('Error deleting educator')
  }
}
