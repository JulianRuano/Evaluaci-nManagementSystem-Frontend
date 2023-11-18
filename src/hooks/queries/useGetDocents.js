import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

// SOLO GET

async function fetchDocents() {
  const config = {
    withCredentials: true
  }
  const response = await axios.get(`${apiUrl}/educators/getEducators`, config)
  return response.data
}

export function useGetDocents() {
  return useQuery({ queryKey: 'docents', queryFn: fetchDocents })
}
