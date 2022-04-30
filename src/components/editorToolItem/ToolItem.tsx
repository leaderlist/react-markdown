import React, { useState, useRef, useEffect } from 'react'
import { Space } from 'antd'

import { ToolItemType, ToolItemProps } from './ToolIteType'
import { ChildrenTool } from '../childrenTool'
import style from './ToolItem.module.less'

export const ToolItem: React.FC<ToolItemProps> = (props) => {
  const [ showed, setShowed ] = useState(false)
  const [ arrowStyle, setArrowStyle ] = useState({
    top: '',
    right: ''
  })
  const [ tipRight, setTipRight ] = useState(0)

  const tipContainerRef = useRef<HTMLDivElement>(null)
  const arrowRef = useRef<HTMLSpanElement>(null)
  const IconContainerRef = useRef<HTMLDivElement>(null)

  const iconHasChildren = props.type === ToolItemType.toolGroup

  useEffect(() => {
    if (showed && tipContainerRef.current && arrowRef.current && IconContainerRef.current) {
      if (!arrowStyle.top) {
        const topNum = tipContainerRef.current.clientHeight
        const rightNum = Math.floor(tipContainerRef.current.clientWidth / 2 - 7 - (arrowRef.current?.clientTop / 2))
        setArrowStyle({
          top: `${topNum}px`,
          right: `${rightNum}px`
        })
        console.log(`set tip arrowStyle to: top-${topNum} right-${topNum}`)
      }
      if (!tipRight) {
        const containerRight = tipContainerRef.current.clientWidth / 2 - (IconContainerRef.current.clientWidth / 2)
        setTipRight(containerRight)
        console.log(`set tip right to ${tipRight}`)
      }
    }
  }, [showed])

  return (
    <>
      <div
        style={props.style}
        onClick={props.onClick}
        onMouseEnter={props.onMouseEnter(showed, setShowed)}
        onMouseLeave={props.onMouseLeave(showed, setShowed)}
        className={style.item}
        ref={IconContainerRef}
      >
        <Space>
          {props.component}
        </Space>
        {
          iconHasChildren
          ?
            <div
              style={showed ? {} : { display: 'none' }}
              className={style.childrenTool}
            >
              {
                props.childToolList !== null && props.childToolList.map((_item) => {
                  console.log(_item.message)
                  return (
                    <ChildrenTool
                      {..._item}
                      key={`childrenTool-${_item.message}`}
                    />
                  )
                })
              }
            </div>
          :
            <div
              style={showed ? { right: `${-tipRight}px` } : { display: 'none' }}
              className={style.tipMessage}
              ref={tipContainerRef}
            >
              {props.tip}
              <span className={style.arrow} ref={arrowRef} style={arrowStyle}></span>
            </div>
        }
      </div>
    </>
  )
}