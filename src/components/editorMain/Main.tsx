import React from 'react'

import style from './Main.module.less'
import { ToolBar } from '@/components/editorToolBar'
import { EditorItem } from '@/components/editorItem'

export const EditorMain: React.FC = function () {
  return (
    <div className={style.editorMain}>
      <ToolBar />
      <div className={style.editContainer}>
        <div className={style.leftEditArea}>
          <EditorItem />
        </div>
        <div className={style.rightPreviewArea}></div>
      </div>
    </div>
  )
}