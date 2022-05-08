import React, { useRef, useState } from 'react'
import style from './InoutArea.module.less'

import { getEditType } from '@/utils'

export const InputArea: React.FC = () => {
  const preRef = useRef<HTMLPreElement>(null)
  const [innerHtml, setInnerHtml] = useState<any>('')
  const [isChangeType, setIsChangeType] = useState(false)

  function inputHandle(e) {
    const innerContent = getEditType(preRef.current?.innerText)
    console.log(JSON.stringify(innerContent))
    if (innerContent.length > 1) {
      const content = <span
        contentEditable
        suppressContentEditableWarning
        key={'changed'}
        className={style.editArea}
                      >{innerContent[0].type === 'default' ? innerContent[0].content : ''}
        {innerContent.map((item, index) => {
          const flag = innerContent[0].type === 'default' ? index > 0 : true
          return (
            flag &&
            <span style={item.style} key={`${item.type} - ${index}`}>
              {item.content}
            </span>
          )
        })}
      </span>
      setInnerHtml(content)
      setIsChangeType(true)
    }
  }

  function clickHandle (e) {
    console.log(e)
  }
  return (
    <pre className={style.editBlock} ref={preRef} onInput={inputHandle} onClick={clickHandle}>
      {
      isChangeType
        ?
        innerHtml
        :
        <span
          key={'notchange'}
          contentEditable
          className={style.editArea}
        ></span>
      }
    </pre>
  )
}