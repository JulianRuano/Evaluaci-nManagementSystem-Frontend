import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

async function fetchWork() {
  const config = {
    withCredentials: true
  }
  const response = await axios.get(`${apiUrl}/works/getWork`, config)
  return response.data
}

export function useGetWork() {
  return useQuery({ queryKey: 'todos', queryFn: fetchWork })
}
