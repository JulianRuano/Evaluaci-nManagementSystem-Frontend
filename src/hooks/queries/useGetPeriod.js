import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

async function fetchPeriods() {
  const response = await axios.get(`${apiUrl}/periods`)
  return response.data
}

export function useGetPeriods() {
    return useQuery({ queryKey: 'periods', queryFn: fetchPeriods })
}

async function fetchPeriod(id) {
  const response = await axios.get(`${apiUrl}/period/${id}`)
  return response.data
}

export function useGetPeriod(id) {
    return useQuery({ queryKey: ['period', id], queryFn: () => fetchPeriod(id) })
}