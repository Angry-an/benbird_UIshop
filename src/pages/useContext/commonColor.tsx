import React from 'react'
interface Icolor{
  [key: string]: {
    color: string,
    background:string
  }
}
const themes: Icolor = {
  'light': {
    color: 'red',
    background:'#fff'
  },
  'dark': {
    color: 'black',
    background:'blue'
  }
}

const ThemeContext = React.createContext(themes.light)

export default ThemeContext
