import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import style from './Item.module.less'
import { InputArea } from '@/components/inputArea'
import { useSelector } from '@/redux/useSelector'
import { markdownDataType } from '@/redux/markDown/reducerType'
import { addMarkdownData } from '@/redux/markDown/action'

export const EditorItem: React.FC = () => {
    const [isNewLine, setIsNewLine] = useState(false)
    const markdownState = useSelector(state => state.markdown)
    const dispatch = useDispatch()
    // 子组件按下enter键时，需要开启新的子组件，并且换行显示
    const enterKeyDownHandle = useCallback(() => {
        setIsNewLine(true)
    }, [])
    // 子组件按下上下键时，需要切换焦点
    // todo
    useEffect(() => {
        if (isNewLine) {
            console.log('需要换行显示')
            // 新增一个inputArea组件
            const payload: markdownDataType = {
                message: '',
                index: markdownState.length,
                type: 'default'
            }
            dispatch(addMarkdownData(payload))
            setIsNewLine(false)
        }
    }, [isNewLine])

    return (
        <div className={style.editorItem}>
            {markdownState.map(item => {
                return (
                    <InputArea
                        {...item}
                        key={`InputArea-${item.index}`}
                        onEnterDown={enterKeyDownHandle}
                    ></InputArea>
                )
            })}
        </div>
    )
}
