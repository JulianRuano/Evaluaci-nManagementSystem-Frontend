import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'

// SOLO GET

async function fetchDocent(uid) {
  const config = {
    withCredentials: true
  }
  console.log('se lo trajo del back')
  const response = await axios.get(
    `${apiUrl}/educators/getEducator/${uid}`,
    config
  )
  console.log(response)
  return response.data
}

export function useGetDocent(uid, isEnabled) {
  return useQuery({
    queryKey: ['docent'],
    queryFn: () => fetchDocent(uid),
    enabled: isEnabled
  })
}
