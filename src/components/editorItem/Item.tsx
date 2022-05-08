import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'

import style from './Item.module.less'
import { useSelector } from '@/redux/useSelector'
import { editMarkdownData, addMarkdownData } from '@/redux/markDown/action'
import { getRandomNum } from '@/utils'

interface propsType {
  index: number
  enterHandle: (number) => void
  content: string
  isFocus: boolean
}
export const EditorItem: React.FC<propsType> = (props) => {
  const { index, enterHandle, content, isFocus } = props
  const spanRef = useRef<HTMLSpanElement>(null)
  const preRef = useRef<HTMLPreElement>(null)
  const dispatch = useDispatch()
  const markDownData = useSelector(state => state.markdown)
  const [isKeyDownHandle, setIsKeyDownHandle] = useState(false)

  useEffect(() => {
    isFocus && spanRef.current?.focus()
    if (spanRef.current && content !== spanRef.current?.innerText) {
      spanRef.current.innerText = content
    }
  }, [])

  const inputHandle = (e) => {
    if (!isKeyDownHandle) {
      const innerText = e.target.textContent
      const oldData = markDownData.find(item => item.index === index)
      const contentTypes = Object.assign({}, oldData, {content: innerText})
      dispatch(editMarkdownData(contentTypes))
    } else {
      setIsKeyDownHandle(false)
    }
  }

  function clickHandle (e) {
    spanRef.current?.focus()
  }

  const keyDowmHandle = (e) => {
    /* console.log(e)
    console.log(spanRef) */
    switch (e.code) {
      case 'Enter':
        let selection = getSelection()
        let nextText = ''
        let currentText = e.target.innerText
        if (currentText && selection) {
          nextText = currentText.slice(selection.focusOffset)
          const newText = currentText.slice(0, selection.focusOffset)
          const currentData = markDownData.find(item => item.index === index)
          if (currentData) {
            const isContentChanged = newText === currentText
            if (isContentChanged && e.target) {
              e.target.innerText = newText
            }
            const key = isContentChanged ? currentData.key : getRandomNum(4) + ''
            const currentPayload = {
              ...currentData,
              content: newText,
              key
            }
            setIsKeyDownHandle(true)
            dispatch(editMarkdownData(currentPayload))
          }
        }
        const nextPayload = {
          content: nextText,
          index: index + 1,
          key: getRandomNum(4) + '' + index
        }
        dispatch(addMarkdownData(nextPayload))
        enterHandle(index + 1)
        e.preventDefault()
        break
    }
  }

  return (
    <pre
      className={style.editBlock}
      ref={preRef}
      onClick={clickHandle}
      onKeyDown={keyDowmHandle}
    >
      <span
        className={style.editArea}
        onInput={inputHandle}
        ref={spanRef}
        contentEditable
      ></span>
    </pre>
  )
}
