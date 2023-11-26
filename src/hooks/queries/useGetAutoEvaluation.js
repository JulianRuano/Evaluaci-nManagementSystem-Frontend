import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

async function fetchAutoEvaluation(year, semester) {
  const config = {
    withCredentials: true
  }
  const response = await axios.get(
    `${apiUrl}/autoEvaluations/getAutoEvaluations?year=2023&semester=1`,
    config
  )
  console.log(response.data)
  return response.data
}
export function useGetAutoEvaluations(year, semester) {
  return useQuery({
    queryKey: ['autoEvaluations'],
    queryFn: () => fetchAutoEvaluation(year, semester)
  })
}
