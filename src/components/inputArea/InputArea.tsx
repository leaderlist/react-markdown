import React, { useRef, memo, useEffect, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

import style from './InoutArea.module.less'
import { editMarkdownData } from '@/redux/markDown/action'
import { markdownDataType } from '@/redux/markDown/reducerType'
import { getEditType } from '@/utils/index'

import { getCurrentComponentConfig } from './lib'

type inputAreaPoprsType = {
    onEnterDown: () => void
    type: string | 'default'
    index: number
}

export const InputArea: React.FC<inputAreaPoprsType> = memo((props: inputAreaPoprsType) => {
    const { onEnterDown, index, type } = props
    // 获取输入markdown的span元素
    const editArea = useRef<HTMLSpanElement>(null)
    // 设置模块内状态判断是否完成本模块输入
    let isEditEnd = false
    const currentTypeRef = useRef('')
    const isKeyUpHandleRef = useRef(false)

    const [currentType, setCurrentType] = useState(type)
    const [currentStyle, setCurrentStyle] = useState({})
    // 获取dispatch
    const dispatch = useDispatch()
    let timer

    // 输入事件的防抖，300ms内不处理输入内容
    const inputHandle = useCallback(() => {
        timer && clearTimeout(timer)
        if (isKeyUpHandleRef.current) {
            isKeyUpHandleRef.current = false
            return
        }
        timer = setTimeout(() => {
            // 如果300ms之后，并且没有输入enter键，需要同步输入内容到redux
            if (!isEditEnd) {
                const payload: markdownDataType = {
                    message: editArea.current?.innerText || '',
                    index,
                    type: currentTypeRef.current || currentType
                }
                dispatch(editMarkdownData(payload))
            }
        }, 300)
    }, [])
    // 按键事件处理，目前只处理enter键，即在enter键时结束当前组件（需要通知到父组件）
    const keyDownHandle = useCallback(e => {
        switch (e.code) {
            case 'Enter':
                isEditEnd = true
                const payload: markdownDataType = {
                    message: editArea.current?.innerText.split('/n')[0] || '',
                    index,
                    type: currentType
                }
                dispatch(editMarkdownData(payload))
                onEnterDown()
                e.preventDefault()
                break
            default:
                break
        }
    }, [])

    const keyUpHandle = useCallback(e => {
        // 输入其他按键，表示在输入内容，需要判断是否命中工具正则
        const innerText = editArea.current?.innerText
        const targetType = getEditType(innerText)
        if (targetType !== currentTypeRef.current) {
            setCurrentType(targetType)
            isKeyUpHandleRef.current = true
            dispatch(
                editMarkdownData({
                    message: editArea.current?.innerText || '',
                    index,
                    type: targetType
                })
            )
        }
    }, [])
    // 每个组件创建初期都要dispatch add new item
    useEffect(() => {
        editArea.current?.focus()
    }, [])
    // 监听currentType,判断对应的组件
    useEffect(() => {
        const currentConfig = getCurrentComponentConfig(currentType)
        currentConfig && setCurrentStyle(currentConfig)
        currentTypeRef.current = currentType
    }, [currentType])

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
                onInput={inputHandle}
                onKeyDown={keyDownHandle}
                onKeyUp={keyUpHandle}
            ></span>
        </pre>
    )
})
