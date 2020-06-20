import { useState, useEffect } from 'react'

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null })

  const updateMousePosition = ev => {
    setMousePosition({ x: ev.clientX, y: ev.clientY })
  }

  useEffect(() => {
    let screen = document.getElementById('screen')
    console.log('Screen value' + screen)
    screen.addEventListener('mousemove', updateMousePosition)

    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return mousePosition
}

export default useMousePosition
