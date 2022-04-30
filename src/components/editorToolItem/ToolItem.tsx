import React, { useState } from 'react'
import { Space } from 'antd'

import { ToolItemProps } from './ToolIteType'
import { ToolItemType } from './ToolIteType'
import style from './ToolItem.module.less'

export const ToolItem: React.FC<ToolItemProps> = (props) => {
  const [ showed, setShowed ] = useState(false)
  return (
    <>
      <div
        style={props.style}
        onClick={props.onClick}
        onMouseEnter={props.onMouseEnter(showed, setShowed)}
        onMouseLeave={props.onMouseLeave(showed, setShowed)}
        className={style.item}
      >
        <Space>
          {props.component}
        </Space>
        <div
          style={showed ? {} : { display: 'none' }}
          className={
            props.type === ToolItemType.singleTool ?
              style.tipMessage :
              style.childrenTool
          }
        >
          {props.tip}
          <span className={style.arrow}></span>
        </div>
      </div>
    </>
  )
}