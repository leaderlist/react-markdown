import React from 'react'
import Icon from '@ant-design/icons'

import type { propsType } from './IconProps'

export const QuoteIcon: React.FC<propsType> = (props: propsType) => {
  const { style: { width, height, lineHeight} } = props
  const QuoteSvg = () => (
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2325" width={width} height={height}>
      <path d="M563.2 607.168a52.224 52.224 0 0 1 0-0.192v-0.064-0.192a460.48 460.48 0 0 1 223.104-394.56 51.2 51.2 0 0 1 52.928 87.68A359.04 359.04 0 0 0 699.648 454.4 153.472 153.472 0 1 1 563.2 607.168z m-409.6 0a52.224 52.224 0 0 1 0-0.192v-0.064-0.192a460.48 460.48 0 0 1 223.104-394.56 51.2 51.2 0 0 1 52.928 87.68A359.04 359.04 0 0 0 290.048 454.4 153.472 153.472 0 1 1 153.6 607.168z" p-id="2326"></path>
    </svg>
  )

  return (
    <div style={{lineHeight}}>
      <Icon component={QuoteSvg} {...props} />
    </div>
  )
}