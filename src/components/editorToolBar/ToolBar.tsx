import React, { useCallback } from 'react'

// import { BoldOutlined } from '@ant-design/icons'

import style from './ToolBar.module.less'

import { ToolItem } from '@/components/editorToolItem'
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

  const getItemStyle = useCallback((isCustom: boolean) => {
    return isCustom
      ? itemStyle
      : {fontSize: '20px', lineHeight: '20px', ...itemStyle}
  }, [])

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
                style={getItemStyle(item.isCustom)}
                onMouseEnter={item.onMouseEnter}
                onMouseLeave={item.onMouseLeave}
                onClick={item.onClick}
              />
            )
          })
        }
      </div>
      <div className={style.toolBarRight}></div>
    </div>
  )
}