import { useEffect, useState } from 'react'

const useSidebar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false)

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible)
  }
  const checkWindowWidth = () => {
    const isLargeScreen = window.innerWidth >= 1024 // Puedes ajustar este valor según tus necesidades
    setSidebarVisible(isLargeScreen)
  }

  useEffect(() => {
    // Verificar el tamaño de la ventana al cargar la página
    checkWindowWidth()

    // Agregar un event listener para seguir el cambio de tamaño de la ventana
    window.addEventListener('resize', checkWindowWidth)

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', checkWindowWidth)
    }
  }, []) // La dependencia vacía garantiza que el efecto se ejecute solo una vez al montar el componente

  return { toggleSidebar, isSidebarVisible }
}

export default useSidebar
