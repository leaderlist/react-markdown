import React from 'react'
import Icon from '@ant-design/icons'

import type { propsType } from './IconProps'

export const CodeIcon: React.FC<propsType> = (props: propsType) => {
  const { style: { width, height, lineHeight} } = props
  const CodeSvg = () => (
    <svg width={width} height={height} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path fill="#333333" d="M666.627 296.882c-12.496-12.497-12.496-32.758 0-45.255 12.497-12.496 32.758-12.496 45.255 0L949.47 489.215c12.497 12.497 12.497 32.758 0 45.255L711.882 772.058c-12.497 12.497-32.758 12.497-45.255 0-12.496-12.497-12.496-32.758 0-45.255L875.931 517.5a8 8 0 0 0 0-11.314L666.627 296.882zM147.167 517.5L356.47 726.803c12.497 12.497 12.497 32.758 0 45.255s-32.758 12.497-45.255 0L73.627 534.47c-12.496-12.497-12.496-32.758 0-45.255l237.588-237.588c12.497-12.496 32.758-12.496 45.255 0 12.497 12.497 12.497 32.758 0 45.255L147.167 506.186a8 8 0 0 0 0 11.314zM580.4 215.198c17.22 3.976 27.957 21.159 23.981 38.379L481.558 785.583c-3.975 17.22-21.158 27.957-38.378 23.981-17.22-3.975-27.957-21.158-23.982-38.378L542.022 239.18c3.975-17.22 21.158-27.957 38.378-23.982z" />
    </svg>
  )

  return (
    <div style={{lineHeight}} onMouseMove={(e) => {console.log(e)}}>
      <Icon component={CodeSvg} {...props} />
    </div>
  )
}