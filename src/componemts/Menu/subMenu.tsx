import React, { useContext, useState } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'

export interface SubMenuProps{
  itemIndex?: any;
  className?: string;
  style?: React.CSSProperties;
  title: string;
  openSub?: boolean
}


const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { itemIndex, className, style, children,title } = props
  const context = useContext(MenuContext)
  // const opens = context.defaultOpen as Array<string>
  const isOpen = context.mode === 'vertical' ? context.defaultOpen?.includes(itemIndex) : false
   const [menuOpen, setMenuOpen] = useState(isOpen)
  const classs = classNames('submenu-item menu-item',className, {
     'is-active': context.index === itemIndex,
  })
  const renderChildren = () => {
    const subMenuclass = classNames('benbird-submenu', {
      'menu-open': menuOpen
    })
    const childrenComponent = React.Children.map(children, (child,i) => {
      const childElement = child as any
      if (childElement.type.displayName === 'menuItem') {
        return React.cloneElement(childElement, {
          itemIndex: childElement.props.itemIndex || `${itemIndex}-${i}`
        })
      } else {
        console.log('please input correct submenu component')
      }
    })
    return (
      <ul className={subMenuclass}>
        {childrenComponent}
      </ul>
    )
  }
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    e.preventDefault()
    setMenuOpen(toggle)
  }
  const clickEvent = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}
  const hoverEvent = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true)},
    onMouseLeave: (e:React.MouseEvent) => { handleMouse(e, false)},
  } : {}
  return (
    <li className={classs} style={style} key={itemIndex} {...hoverEvent}>
      <div className="submen-title" {...clickEvent}>{title}:{ itemIndex}</div>
      <div style={ context.mode === 'vertical' ? {} :{'position':'absolute'}}>
        {renderChildren()}
      </div>
    </li>
  )
}
SubMenu.displayName = 'subMenu'
export default SubMenu
