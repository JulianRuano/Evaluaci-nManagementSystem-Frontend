import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'
import { logout } from '../../redux/slices/authSlice'
import { clearEducators } from '../../redux/slices/educatorSlice'
import { clearLabourState } from '../../redux/slices/labourSlice'
import { clearPeriods } from '../../redux/slices/periodSlice'

export const startHandleLogout = () => {
  return async (dispatch) => {
    try {
      // Llamar al endpoint de deslogueo de la API para eliminar la cookie JWT
      const config = {
        withCredentials: true
      }
      const response = await axios.post(`${apiUrl}/auth/logout`, null, config)
      if (response.status === 200) {
        console.log('Logout successful')
        dispatch(clearEducators())
        dispatch(clearPeriods())
        dispatch(clearLabourState())
        dispatch(logout())
        return true
      }
    } catch (error) {
      console.error('Error during logout:', error)
      return false
    }
  }
}
