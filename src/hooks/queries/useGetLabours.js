import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

// SOLO GET

async function fetchLabours() {
  const response = await axios.get(`${apiUrl}/labours`)
  return response.data
}

export function useGetLabours() {
  return useQuery({ queryKey: 'todos', queryFn: fetchLabours })
}
