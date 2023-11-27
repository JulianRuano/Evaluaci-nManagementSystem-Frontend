import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

async function fetchMyAutoEvaluations() {
  const config = {
    withCredentials: true
  }

  const response = await axios.get(
    `${apiUrl}/autoEvaluations/getAutoEvaluationsByDocentId`,
    config
  )
  return response.data
}

export function useGetMyAutoEvaluations() {
  return useQuery({
    queryKey: ['myAutoEvaluations'],
    queryFn: () => fetchMyAutoEvaluations()
  })
}
