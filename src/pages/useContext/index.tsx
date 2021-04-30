import React from 'react'
import Btn1 from './btn1'
import Btn2 from './btn2'
import btn3 from './btn3'
import ThemeContext from './commonColor'
const context = () => {
  return (
    <>
      <ThemeContext.Provider value={{color: 'red',background:'#fff'}}>
        <h1>context</h1>
        <div>{
              Btn1()
            }</div>
            <div>{
              Btn2()
        }</div> 
        <div> {
              btn3()
            }</div>
            
           
      </ThemeContext.Provider>
     
      </>
  )
}

export default context
