import React,{createContext,useState} from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'

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
  const { className, mode, style, children, defaultIndex, onSelect } = props
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
  /**
   * renderChildren
   * 遍历children，看每个item是否是menuitem，不是就报错
   * 为什么不直接map：因为child不一定是数组，可能是函数或者对象。
   */
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'menuItem') {
        // 给其添加属性
        return React.cloneElement(childElement, {
          itemIndex: index
        })
      } else {
        console.error('please input correct component')
      }
    })
  }
  return (
    <ul className={classs} style={style} data-testid="menu-test">
      <MenuContext.Provider value={passContext}>
         {renderChildren()}
      </MenuContext.Provider>
     
    </ul>
  )
}
Menu.defaultProps = {
  defaultIndex: 0,
  mode:'horizontal'
}

export default Menu
