import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

// SOLO GET

export async function fetchEducators(role) {
  const config = {
    withCredentials: true
  }
  const response = await axios.get(
    `${apiUrl}/educators/getEducators/${role}`,
    config
  )
  console.log('se llamo')
  return response.data
}

export function useGetEducators(role) {
  return useQuery({
    queryKey: ['docents'],
    queryFn: () => fetchEducators(role)
  })
}
