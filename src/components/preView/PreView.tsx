import React from 'react'

import { useSelector } from '@/redux/useSelector'
import { parseItemtype, parseContentType } from '@/components/lib/editMain'
import { H1, H2, H3, H4, H5, H6, P, Quote, Ul, Ol, CodeBlock } from '../lib/editMain/previewConfig'

export const PreView = () => {
  const markDownData = useSelector(state => state.markdown)

  function getChildren (config, text) {
    const targetStr = text.match(config.reg)[1]
    let children
    if (targetStr) {
      children = parseContentType(targetStr)
      console.log(children)
    } else {
      children = ''
    }
    return children
  }
  /**
 * 根据名字和内容，获取渲染的内容
 * @param {Object} config 要匹配的组件名字
 * @param {String} text 渲染内容
 */
  function getRenderContent(config, text: string) {
    let result
    switch (config.name) {
      case 'h1':
        result = (<H1>{getChildren(config, text)}</H1>)
        break
      case 'h2':
        result = (<H2>{getChildren(config, text)}</H2>)
        break
      case 'h3':
        result = (<H3>{getChildren(config, text)}</H3>)
        break
      case 'h4':
        result = (<H4>{getChildren(config, text)}</H4>)
        break
      case 'h5':
        result = (<H5>{getChildren(config, text)}</H5>)
        break
      case 'h6':
        result = (<H6>{getChildren(config, text)}</H6>)
        break
      case 'codeBlock':
        result = (<CodeBlock>{getChildren(config, text)}</CodeBlock>)
        break
      case 'quote':
        result = (<Quote>{getChildren(config, text)}</Quote>)
        break
      case 'unorderedList':
        result = (<Ul>{getChildren(config, text)}</Ul>)
        break
      case 'orderedList':
        result = (<Ol>{getChildren(config, text)}</Ol>)
        break
      case 'codeBlockEnd':
        result = ''
        break
      case 'default':
        result = (<P>{getChildren(config, text)}</P>)
        break
      default:
        break
    }
    return result
  }
  return (<div className="previewContainer">
    {
      markDownData.map(item => {
        const config = parseItemtype(item.content)
        const renderContent = getRenderContent(config, item.content)
        console.log(renderContent)
        return (<div key={item.index}>{renderContent}</div>)
      })
    }
  </div>)
}