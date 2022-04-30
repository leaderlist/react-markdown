import React from 'react'
import Icon from '@ant-design/icons'

import type { propsType } from './IconProps'

export const H3Icon: React.FC<propsType> = (props: propsType) => {
  const { style: { width, height, lineHeight} } = props
  const H3svg = () => (
    <svg width={width} height={height} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path fill="#333333" d="M707.490909 894.417455a188.509091 188.509091 0 0 1-61.719273-136.331637h80.802909a110.033455 110.033455 0 0 0 34.490182 82.711273 105.006545 105.006545 0 0 0 74.845091 26.810182 114.641455 114.641455 0 0 0 81.547637-29.789091 90.670545 90.670545 0 0 0 27.22909-66.327273 82.199273 82.199273 0 0 0-28.672-69.259636 119.202909 119.202909 0 0 0-78.568727-22.434909h-38.167273v-61.067637h37.515637a107.799273 107.799273 0 0 0 72.657454-21.643636 78.382545 78.382545 0 0 0 24.994909-61.812364 80.709818 80.709818 0 0 0-22.807272-61.067636 102.4 102.4 0 0 0-71.261091-21.643636 104.866909 104.866909 0 0 0-74.146909 24.66909 110.312727 110.312727 0 0 0-31.604364 73.681455h-78.568727a174.638545 174.638545 0 0 1 58.042182-123.671273 177.524364 177.524364 0 0 1 125.672727-43.938909 194.699636 194.699636 0 0 1 127.022545 38.772364 133.352727 133.352727 0 0 1 47.010909 107.054545 115.246545 115.246545 0 0 1-86.667636 117.015273 146.338909 146.338909 0 0 1 70.516364 43.892364 113.943273 113.943273 0 0 1 26.391272 77.544727 158.999273 158.999273 0 0 1-49.943272 120.645818 200.471273 200.471273 0 0 1-137.309091 47.662546 193.117091 193.117091 0 0 1-129.303273-41.472z m-261.306182 41.890909v-382.976H93.090909v372.363636H0v-837.818182h93.090909v372.363637h353.093818V98.304h93.090909v837.818182z" />
    </svg>
  )
  return (
    <div style={{lineHeight}}>
      <Icon component={H3svg} {...props} />
    </div>
  )
}