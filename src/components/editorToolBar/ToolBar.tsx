import React from 'react'

import { BoldOutlined } from '@ant-design/icons'

import style from './ToolBar.module.less'
import { ToolItem } from '../editorToolItem'
import { ToolItemType } from '../editorToolItem/ToolIteType'

export const ToolBar: React.FC = () => {
  return (
    <div className={style.toolBalContainer}>
      <div className={style.toolBarLeft}>
        <ToolItem
          tip="加粗"
          type={ToolItemType.singleTool}
          component={<BoldOutlined />}
        />
      </div>
      <div className={style.toolBarRight}></div>
    </div>
  )
}