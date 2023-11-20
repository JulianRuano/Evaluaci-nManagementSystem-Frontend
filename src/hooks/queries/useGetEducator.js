import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

// SOLO GET
async function fetchEducatorById() {
  const config = {
    withCredentials: true
  }
  const response = await axios.get(`${apiUrl}/educators`, config)
  return response.data
}

export function useGetEducatorById(educatorId) {
  return useQuery({
    queryKey: ['educator', educatorId],
    queryFn: () => fetchEducatorById(educatorId)
  })
}
