import React, { useState, useEffect } from 'react'

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('add effect')
    const run = (e: MouseEvent) => {
      console.log('run')
      setPosition({x:e.clientX,y:e.clientY})
    }
    document.addEventListener("mouseover", run)
    return () => {
      console.log('del effect')
      document.removeEventListener("mouseover", run)
    }
  },[])
  return position
}
export default useMousePosition
