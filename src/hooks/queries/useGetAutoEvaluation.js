import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

async function fetchAutoEvaluation(year, semester) {
  const config = {
    withCredentials: true
  }
  const response = await axios.get(
    `${apiUrl}/autoEvaluations/getPercentageAutoEvaluations?year=${year}&semester=${semester}`,
    config
  )
  console.log('****')
  console.log(response)

  return response.data
}
export function useGetAutoEvaluations(year, semester) {
  return useQuery({
    queryKey: ['autoEvaluations'],
    queryFn: () => fetchAutoEvaluation(year, semester)
  })
}
