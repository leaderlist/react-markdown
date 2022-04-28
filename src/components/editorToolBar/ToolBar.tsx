import React from 'react'

// import { BoldOutlined } from '@ant-design/icons'

import style from './ToolBar.module.less'

import { ToolItem } from '../editorToolItem'
import { leftBar } from './ToolBarConfig'

export const ToolBar: React.FC = () => {
  const itemStyle: Object = {
    display: 'inline-block',
    verticalAlign: 'center',
    cursor: 'pointer',
    borderRadius: 4,
    marginLeft: 6,
    marginRight: 6
  }

  return (
    <div className={style.toolBalContainer}>
      <div className={style.toolBarLeft}>
        {
          leftBar.map(item => {
            return (
              <ToolItem
                key={item.name}
                {...item}
                component={item.icon}
                style={item.isCustom ? itemStyle : {fontSize: '20px', lineHeight: '20px', ...itemStyle}}
                onMouseOver={item.onMouseOver}
              />
            )
          })
        }
      </div>
      <div className={style.toolBarRight}></div>
    </div>
  )
}