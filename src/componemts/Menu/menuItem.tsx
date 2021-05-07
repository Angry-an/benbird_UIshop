import React, { useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
export interface MenuItemProps{
  itemIndex: number;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { className, itemIndex, style, disabled, children } = props
  const context = useContext(MenuContext)

  const classs = classNames('menu-item', className,{
    'is-disabled': disabled,
    'is-active': context.index === itemIndex
  })
  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(itemIndex)
    }
  }
  return (
    <li className={classs} style={style} onClick={ handleClick}>
      {children}
    </li>
  )
}
export default MenuItem
