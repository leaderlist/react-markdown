import React from 'react'
import { Space } from 'antd'

import { ToolItemProps } from './ToolIteType'

export const ToolItem: React.FC<ToolItemProps> = (props: ToolItemProps) => {
  return (
    <div>
      <Space>
        {props.component}
      </Space>
    </div>
  )
}