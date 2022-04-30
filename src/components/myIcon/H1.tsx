import React from 'react'
import Icon from '@ant-design/icons'

import type { propsType } from './IconProps'

export const H1Icon: React.FC<propsType> = (props: propsType) => {
  const { style: { width, height, lineHeight} } = props
  const H1svg = () => (
    <svg width={width} height={height} viewBox="0 0 1047 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path fill="#333333" d="M472.296727 930.909091v-372.363636H116.363636v372.363636h-93.090909V93.090909h93.090909v372.363636h355.886546V93.090909h93.090909v837.818182zM874.170182 930.955636v-0.418909h-120.413091v-69.818182h120.413091v-364.171636a283.927273 283.927273 0 0 1-120.413091 67.072V483.141818a301.335273 301.335273 0 0 0 74.146909-31.278545 304.500364 304.500364 0 0 0 66.187636-52.922182h60.183273v461.730909h93.090909v69.818182h-93.090909V930.909091z" />
    </svg>
  )
  return (
    <div style={{lineHeight}}>
      <Icon component={H1svg} {...props} />
    </div>
  )
}