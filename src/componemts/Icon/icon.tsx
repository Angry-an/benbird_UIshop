import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'danger'
export interface IconProps extends FontAwesomeIconProps{
  theme?: ThemeProps
}
const Icon: React.FC<IconProps> = (props) => {
  const { className, theme, ...restProps } = props
  const classs = classNames('benbird-icon', className, {
    [`icon-${theme}`]: theme
  })
  return (
    <FontAwesomeIcon className={ classs } {...restProps}/>
  )
}
export default Icon
