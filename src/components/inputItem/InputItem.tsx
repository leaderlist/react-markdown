import React, { useRef, useCallback } from 'react'

import style from './InputItem.module.less'
import { getEditType } from '@/utils/index'

type inputItemType = {
  currentStyle: {
    [propName: string]: string
  },
  currentType: string,
  isSingle: boolean,
  changeType: (string) => void,
  ref: React.RefObject<HTMLPreElement>
}

export const InputItem: React.FC<inputItemType> = (props) => {
  const { currentStyle, currentType, isSingle, changeType } = props
  const editArea = useRef<HTMLSpanElement>(null)

  // key down 事件用来通知父组件，比如enter键时需要换行
  const keyDownHandle = useCallback(e => {
    switch (e.code) {
      case 'Enter':
        if (isSingle) {
          // 如果是单个子组件显示
        }else {
          // 如果是多个子组件显示,判断是否是最后一行
        }
        e.preventDefault()
        break
      default:
        break
    }
  }, [])
  // keyup事件用来监听组件类型
  const keyUpHandle = useCallback(e => {
    // 输入内容，需要判断是否命中工具正则
    const innerText = editArea.current?.innerText
    const targetType = getEditType(innerText)
    // 获取到当前组件类型,判断是否改变，如果已经改变，需要通知父组件
    if (targetType !== currentType) {
      // 通知父组件
      changeType(targetType)
    }
  }, [])
  return (
    <pre
      className={style.editBlock}
      onClick={() => {
        editArea.current?.focus()
      }}
    >
      <span
        className={style.editArea}
        style={currentStyle}
        contentEditable
        ref={editArea}
        // onInput={inputHandle}
        onKeyDown={keyDownHandle}
        onKeyUp={keyUpHandle}
      ></span>
    </pre>
  )
}