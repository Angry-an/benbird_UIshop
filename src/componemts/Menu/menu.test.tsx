import React from 'react'
import Menu, { MenuProps } from './menu'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import MenuItem from './menuItem'

const testProps: MenuProps = {
    defaultIndex: 0,
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
      <MenuItem itemIndex ={0}>
        active
      </MenuItem>
      <MenuItem disabled itemIndex ={1}>
        disabled
      </MenuItem>
      <MenuItem itemIndex ={2}>
        xyz
      </MenuItem>
    </Menu>
  )
}
let wrapper:RenderResult,menuElement:HTMLElement,activeElement:HTMLElement,disabledElement:HTMLElement
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
})
