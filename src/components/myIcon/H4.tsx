import React from 'react'
import Icon from '@ant-design/icons'

import type { propsType } from './IconProps'

export const H4Icon: React.FC<propsType> = (props: propsType) => {
  const { style: { width, height, lineHeight} } = props
  const H4svg = () => (
    <svg width={width} height={height} viewBox="0 0 1070 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path fill="#333333" d="M891.578182 930.909091v-115.432727h-255.581091v-76.8l258.513454-339.781819h73.448728v351.697455h79.127272v64.837818h-79.127272v115.432727z m-190.231273-180.270546h190.231273V501.76h-2.187637zM472.296727 930.909091v-372.363636H116.363636v372.363636h-93.090909V93.090909h93.090909v372.363636h355.933091V93.090909h93.090909v837.818182z" />
    </svg>
  )
  return (
    <div style={{lineHeight}}>
      <Icon component={H4svg} {...props} />
    </div>
  )
}