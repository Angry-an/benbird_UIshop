import React, { useState, useEffect } from 'react';

const MouseTest: React.FC = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  useEffect(() => {
    // console.log(positions.x,'add effect')
    const toPosition = (e: MouseEvent) => {
      // console.log(positions.x,'run')
      setPositions({x:e.clientX, y:e.clientY})
  }
    document.addEventListener('click', toPosition)
    return () => {
      // console.log(positions.x,'del effect')
      document.removeEventListener('click',toPosition)
    }
  },[])
  // console.log(positions.x,'before render')
  return (
    <>
      <p>{positions.x}</p>
      <p>{positions.y}</p>
      </>
  )
}

export default MouseTest
