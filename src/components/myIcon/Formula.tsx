import React from 'react'
import Icon from '@ant-design/icons'

import type { propsType } from './IconProps'

export const FormulaIcon: React.FC<propsType> = (props: propsType) => {
  const { style: { width, height, lineHeight} } = props
  const FormulaSvg = () => (
    <svg width={width} height={height} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path fill="#333333" d="M552.0896 565.90336L606.03392 512l-53.94432-53.90336L290.6112 196.83328l551.0144-0.29696v-76.25728l-659.17952 0.3584v76.25728L498.14528 512 182.3744 827.50464v75.85792l659.17952 0.3584v-76.25728l-551.0144-0.29696 261.55008-261.26336" />
    </svg>
  )
  return (
    <div style={{lineHeight}}>
      <Icon component={FormulaSvg} {...props} />
    </div>
  )
}