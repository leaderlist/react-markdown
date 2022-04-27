import React from 'react'
import { Button } from 'antd'
import type { ButtonProps } from 'antd'

import style from './Header.module.less'

type infoItem = {
  message: string,
  type: ButtonProps['type']
}

export const EditorHeader: React.FC = function () {
  const buttonList: Array<infoItem> = [
    {
      message: '草稿箱',
      type: 'default'
    },
    {
      message: '发布',
      type: 'primary'
    },
    {
      message: '我的文章',
      type: 'default'
    }
  ]
  return (
    <div className={style.headerContainer}>
      <div className={style.leftBox}></div>
      <input
        type="text"
        className={style.titleInput}
        maxLength={80}
        placeholder={'请输入文章标题......'}
      />
      <div className={style.rightBox}>
        <div className={style.tipMessage}>
          {'文章将自动保存至草稿箱'}
        </div>
        {
          buttonList.map(item => {
            return (
              <div
                className={style.buttonContainer}
                key={`editor-header-${item.message}`}
              >
                <Button
                  type={item.type}
                >
                  {item.message}
                </Button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}