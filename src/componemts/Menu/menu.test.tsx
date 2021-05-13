import React from 'react'
import Menu, { MenuProps } from './menu'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

const testProps: MenuProps = {
    defaultIndex: '0',
    onSelect: jest.fn(),
    className: 'test'
}

const testVerProps: MenPropps = {
  defaultIndex: 0,
  mode: 'vertical',
  // defaultOpenSubMenus: ['4']
}

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>
        active
      </MenuItem>
      <MenuItem>
        qxa
      </MenuItem>
      <MenuItem disabled={ true }>
        disabled
      </MenuItem>
      <MenuItem>
        xyz
      </MenuItem>
      <SubMenu title="测试submenu2">
          <MenuItem>123</MenuItem>
          <MenuItem>456</MenuItem>
          <MenuItem>789</MenuItem>
      </SubMenu>
    </Menu>
  )
}
const createStyleFile = () => {
  const cssFile: string = `
    .benbird-submenu {
      display: none;
    }
    .benbird-submenu.menu-open {
      display:block;
    }
  `
  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = cssFile
  return style
}
let wrapper:RenderResult,wrapper2:RenderResult,menuElement:HTMLElement,activeElement:HTMLElement,disabledElement:HTMLElement
describe('test menu component', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps))
    menuElement = wrapper.getByTestId('menu-test')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')
  });
  it('should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('benbird-menu test')
    expect(activeElement).toHaveClass('menu-item is-active')
    expect(disabledElement).toHaveClass('menu-item is-disabled')
  })
  it('click items should change active and call the right callback', () => {
    const thirdItem = wrapper.getByText('qxa')
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith('1')
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('is-active')
  })
})
describe('test Menu and MenuItem component in vertical mode', () => {
  beforeEach(() => {
    wrapper2 = render(generateMenu(testVerProps))
    wrapper2.container.append(createStyleFile())
  })
  it('should render vertical mode when mode is set to vertical', () => {
    const menuElement = wrapper2.getByTestId('menu-test')
    expect(menuElement).toHaveClass('menu-vertical')
  })
})
