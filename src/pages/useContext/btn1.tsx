// import './index.less'
import React, { useEffect, useContext } from 'react'
import ThemeContext from './commonColor'

const Btn1 = () => {
  const theme = useContext(ThemeContext)
  console.log(theme, 'theme')
  const style = {
    color: theme.color,
    background:theme.background
  }
  return (
    <button style={style}>按钮1</button>
  )
}

export default Btn1
