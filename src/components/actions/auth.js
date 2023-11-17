import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'
import { logout } from '../../redux/slices/authSlice'

export const startHandleLogout = () => {
  return async (dispatch) => {
    try {
      // Llamar al endpoint de deslogueo de la API para eliminar la cookie JWT
      const response = await axios.post(`${apiUrl}/auth/logout`)
      if (response.status === 200) {
        console.log('Logout successful')
        dispatch(logout())
        return true
      }
    } catch (error) {
      console.error('Error during logout:', error)
      return false
    }
  }
}
