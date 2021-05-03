import classNames from 'classnames'
import React from 'react'
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType{
  Primary = 'primary',
  Danger = 'danger',
  Default = 'default',
  Link = 'link'
}

interface BaseButtonProps{
  children?: React.ReactNode,
  size?: ButtonSize,
  btnType?: ButtonType,
  disabled?: boolean
  href?: string
}

const Button: React.FC<BaseButtonProps> = (props) => {
  const { children, size, btnType, disabled, href } = props
  const classes = classNames('btn',
    {
      [`btn-${btnType}`]: btnType,
      [`btn-${size}`]: size,
      'disabled': (btnType === ButtonType.Link && disabled),
    }
  )
  if (btnType === ButtonType.Link && href) {
    return (
      <a href={href} className={ classes }>{ children }</a>
    )
  }
  return (
    <button className={classes} disabled={ disabled }>{ children }</button>
  )
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button
