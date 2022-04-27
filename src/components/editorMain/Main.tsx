import React from 'react'

import style from './Main.module.less'
import { ToolBar } from '../editorToolBar'

export const EditorMain: React.FC = function () {
  return (
    <div className={style.editorMain}>
      <ToolBar />
    </div>
  )
}