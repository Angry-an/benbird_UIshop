import React, { MouseEvent } from 'react'
import './index.css'

type Props = {
  onClick(e: MouseEvent<HTMLElement>): void,
  src: string,
  show: boolean
}

const BigImageChange = ({ onClick, src, show }: Props) => { 
  return show ? <div className="big-img-wrap" onClick={onClick}>
      <div className="big-img-content">
        <img src={src} className="big-img" alt="" />
      </div>
  </div> : <div className="tc" onClick={onClick}>fuck me</div>;
}
// const BigImageChange = ({ onClick, src, show }: {onClick:()=>void,src:String,show:Boolean}) => { }

export default BigImageChange
