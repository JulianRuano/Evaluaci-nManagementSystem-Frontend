import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

// SOLO GET

async function fetchLabourTypes() {
  const config = {
    withCredentials: true
  }
  const response = await axios.get(
    `${apiUrl}/autoEvaluations/labourTypes`,
    config
  )
  return response.data
}

export function useGetLabourTypes() {
  return useQuery({ queryKey: ['labourTypes'], queryFn: fetchLabourTypes })
}
