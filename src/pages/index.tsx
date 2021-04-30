// import MouseTest from "../components/MouseTest";
import useMousePosition from './../hooks/useMousePosition'
import useUrlLoading from './../hooks/useUrlLoading'
import React, { useState, useEffect } from 'react'
import context from './useContext/index'
interface IShowResult{
  message: string,
  status:string
}
function Home() {
  const [imgs,setImgs] = useState(false)
  // const position = useMousePosition()
  const [data, loading] = useUrlLoading('https://dog.ceo/api/breeds/image/random',[imgs])
  const dogresult = data as IShowResult
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>这是首页</h1>
          <button onClick={() => {
            setImgs(!imgs)
          }}>click me</button>
          {loading ? <h2>'正在加载。。。。。。'</h2> : <img src={ dogresult && dogresult.message } alt=""/>}
          {/* <h2>x:{position.x },y:{position.y }</h2> */}
          {/* <MouseTest></MouseTest> */}
          {/* <h1><a href='#/imgchange'>去image</a></h1>
          <h1><a href='#/detail'>detail</a></h1>
          <h1><a href='#/toChild'>componentReceiveProps</a></h1> */}
          {context()}
        </div>
      </header>
    </div>
  );
}
export default Home
