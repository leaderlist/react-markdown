import React, { useState } from 'react'

import style from './Main.module.less'
import { ToolBar } from '@/components/editorToolBar'
import { EditorItem } from '@/components/editorItem'
import { PreView } from '../preView'
import { useSelector } from '@/redux/useSelector'

export const EditorMain: React.FC = function () {
  const markDownData = useSelector(state => state.markdown)
  const [focusIndex, setFocusIndex] = useState(0)
  function enterHandle (index) {
    // markDownData = useSelector(state => state.markdown)
    setFocusIndex(index)
  }
  return (
    <div className={style.editorMain}>
      <ToolBar />
      <div className={style.editContainer}>
        <div className={style.leftEditArea}>
          {
            markDownData.map(item => {
              return (
                <EditorItem
                  index={item.index}
                  key={item.key + ''}
                  content={item.content}
                  enterHandle={enterHandle}
                  isFocus={item.index === focusIndex}
                ></EditorItem>
              )
            })
          }
        </div>
        <div className={style.rightPreviewArea}>
          <PreView></PreView>
        </div>
      </div>
    </div>
  )
}