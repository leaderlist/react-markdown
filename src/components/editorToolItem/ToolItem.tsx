import React from 'react'
import { Space } from 'antd'

import { ToolItemProps } from './ToolIteType'

export const ToolItem: React.FC<ToolItemProps> = (props) => {
  return (
    <div style={props.style}>
      <Space>
        {props.component}
      </Space>
    </div>
  )
}