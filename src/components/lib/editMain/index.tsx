import React from 'react'
import { lineTyoeConfig, contentConfig } from './previewConfig'

/**
 * 根据当前信息，判断当前类型
 * 1.判断以xxx开头的集中类型： h1-h6,codeBlock,unorderedList,orderedList, quote,没命中就是default
 *
 */
export function parseItemtype (itemMessage: string) {
  // 获取h1-h6或者P标签的name
  let resultConfig
  for (let i = 0; i < lineTyoeConfig.length; i++) {
    if (itemMessage.match(lineTyoeConfig[i].reg)) {
      resultConfig = lineTyoeConfig[i]
      break
    }
  }
  return resultConfig
}
/**
 * @description 解析输入内容（除段落格式之外），返回对应显示类型
 * @param {String} content 除段落格式之外的输入文本
 * @returns {String} result 返回的显示内容拼接字符串
 */
export function parseContentType (content: string) {
  let targetStr = content
  let result: string = ''
  console.log(targetStr, result)
  while (targetStr !== '') {
    const flag = result
    for (let i = 0; i < contentConfig.length; i++) {
      const matchResult = targetStr.match(contentConfig[i].reg)
      if (matchResult) {
        const startStr = targetStr.slice(0, matchResult.index)
        if (startStr.length > 0) {
          result += startStr
        }
        switch (contentConfig[i].name) {
          case 'blod':
            result += `<b>${matchResult[1]}</b>`
          break
          case 'italic':
            result += `<em>${matchResult[1]}</em>`
          break
          case 'link':
            result += `<a href=${matchResult[2]}>${matchResult[1]}</a>`
          break
          case 'picture':
            result += `<img src=${matchResult[2]} alt=${matchResult[1]} />`
          break
          case 'code':
            result += `<code>${matchResult[1]}</code>`
            console.log(result)
          break
          case 'deleteLine':
            result += `<del>${matchResult[1]}</del>`
          break
        }
        if (typeof matchResult?.index === 'number') {
          targetStr = targetStr.slice(matchResult.index + matchResult[0].length)
        }
        break
      }
    }
    if (result === flag) {
      result += targetStr
      targetStr = ''
    }
  }
  if (result === '' && targetStr !== undefined) result += targetStr
  console.log(result)
  return result
}