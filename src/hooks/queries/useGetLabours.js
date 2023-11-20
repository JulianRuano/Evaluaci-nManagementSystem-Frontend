import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

// SOLO GET

async function fetchLabours() {
  const config = {
    withCredentials: true
  }
  const response = await axios.get(`${apiUrl}/autoEvaluations/labours`, config)
  return response.data
}

export function useGetLabours() {
  return useQuery({ queryKey: ['labours'], queryFn: fetchLabours })
}
