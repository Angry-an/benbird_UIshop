import React,{createContext,useState} from 'react'
import classNames from 'classnames'

type MenuMode = 'vertical' | 'horizontal'
type SelectCallBack = (selectedIndex: number)=> void
export interface MenuProps{
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallBack
}

export interface IMenuContext{
  index?: number;
  onSelect?: SelectCallBack
}

export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex,onSelect } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const handleClick = (index: number) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passContext: IMenuContext= {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick
  }
  const classs = classNames('benbird-menu', className, {
    'menu-vertical': mode === 'vertical'
  })
  return (
    <ul className={classs} style={style}>
      <MenuContext.Provider value={passContext}>
         {children}
      </MenuContext.Provider>
     
    </ul>
  )
}
Menu.defaultProps = {
  defaultIndex: 0,
  mode:'horizontal'
}

export default Menu
