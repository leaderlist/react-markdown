import React from 'react'
import Icon from '@ant-design/icons'

import type { propsType } from './IconProps'

export const TitleIcon: React.FC<propsType> = (props: propsType) => {
  const { style: { width, height, lineHeight} } = props
  const TitleSvg = () => (
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1336" width={width} height={height}>
      <path d="M235.5 871.691v-740h98v304h385v-304h98v740h-98v-349h-385v349h-98z" p-id="1337"></path>
    </svg>
  )

  return (
    <div style={{lineHeight}}>
      <Icon component={TitleSvg} {...props} />
    </div>
  )
}
