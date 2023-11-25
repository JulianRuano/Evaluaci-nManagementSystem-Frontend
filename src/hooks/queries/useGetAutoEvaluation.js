import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

async function fetchAutoEvaluation() {
  const config = {
    withCredentials: true
  }
  const response = await axios.get(
    `${apiUrl}/autoEvaluations/getAutoEvaluations`,
    config
  )
  return response.data
}
export function useGetAutoEvaluations() {
  return useQuery({
    queryKey: ['autoEvaluations'],
    queryFn: fetchAutoEvaluation
  })
}
