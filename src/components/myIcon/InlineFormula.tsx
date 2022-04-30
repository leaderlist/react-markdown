import React from 'react'
import Icon from '@ant-design/icons'

import type { propsType } from './IconProps'

export const InlineFormulacon: React.FC<propsType> = (props: propsType) => {
  const { style: { width, height, lineHeight} } = props
  const InlineFormulaSvg = () => (
    <svg width={width} height={height} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h1024v1024H0z" fill="#FFFFFF" /><path d="M552.082286 565.906286L606.061714 512l-53.979428-53.906286-261.485715-261.266285 551.058286-0.292572V120.246857l-659.236571 0.365714v76.288L498.176 512l-315.830857 315.538286v75.849143l659.236571 0.365714v-76.288l-551.058285-0.292572 261.558857-261.266285" fill="#000000" /><path d="M0 512h292.571429v73.142857H0zM731.428571 512h292.571429v73.142857h-292.571429z" fill="#000000" />
    </svg>
  )
  return (
    <div style={{lineHeight}}>
      <Icon component={InlineFormulaSvg} {...props} />
    </div>
  )
}