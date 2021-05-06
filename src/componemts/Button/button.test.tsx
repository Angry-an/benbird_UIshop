import { render,fireEvent } from '@testing-library/react'
import Button, { ButtonSize, ButtonType} from './button'
import React from 'react'
// const defaultProps = {
//   onClick: jest.fn()
// }

const testProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'klass'
}
// test('first test case', () => {
//   const wrapper = render(<Button>Nice</Button>)
//   const element = wrapper.queryByText('Nice')
//   expect(element).toBeTruthy()
//   expect(element).toBeInTheDocument()
// })
describe('test Button Component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    // fireEvent.click(element)
    // expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render button type', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn btn-primary btn-lg')
  })
})
