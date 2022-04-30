import React from 'react'

import { childrenTool } from '../editorToolItem/ToolIteType'
import style from './childrenTool.module.less'

export const ChildrenTool: React.FC<childrenTool> = (props: childrenTool) => {
  const { icon, message } = props
  return (
    <div className={style.container}>
      <div className={style.leftIcon}>
        {
          icon !== null && icon
        }
      </div>
      <div className={style.rightMessage}>{message}</div>
    </div>
  )
}