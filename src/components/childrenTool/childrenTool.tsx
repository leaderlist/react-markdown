import React from 'react'

import { childrenToolType } from '@/components/editorToolItem/ToolIteType'
import style from './childrenTool.module.less'

export const ChildrenTool: React.FC<childrenToolType> = (props: childrenToolType) => {
  const { icon, message, isTitle } = props
  return (
    <div className={`${style.container} ${isTitle ? style.hasTitle : ''}`}>
      <div className={style.leftIcon}>
        {
          icon !== null && icon
        }
      </div>
      <div className={style.rightMessage}>{message}</div>
    </div>
  )
}