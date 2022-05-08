import contentConfigs from '@/publicDefine/contentTypeConfig'
import { configType, styleType } from '@/publicDefine/contentTypeConfig'

interface stylesType {
  type: string
  style: styleType
  content: string
}
export function getValueType (value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}

export function getRandomNum (num = 5) {
  return Math.floor(Math.random() * Math.pow(10, num))
}
export function getToolReg () {
  let configRegs: Array<configType> = []
  for(let config of contentConfigs) {
    configRegs.push(config)
  }
  return configRegs
}

export function getEditType (innerText: string) {
  const configRegs = getToolReg()
  let styles: Array<stylesType> = []
  let innerContent = innerText
  for (let config of configRegs) {
    let matchResult = config.reg && innerContent.match(config.reg)
    if (matchResult) {
      console.log(JSON.stringify(matchResult), matchResult)
      if (config.isSingle) {
        styles.unshift({type: config.name,style: config.style, content: innerContent})
        break
      }
      styles.unshift({type: config.name,style: config.style, content: matchResult[0]||innerContent})
      innerContent = innerContent.slice(0, matchResult.index)
      console.log(innerContent)
      if (!innerContent) break
    }
  }
  return styles
}

/* export const getCurrentComponentConfig = (type) => {
  if (type !== 'default') {
      const config = contentConfigs[type]
      const style = config.style
      let resultStyle = {}
      for (let item in style) {
          console.log(style, style[item])
          if (style[item] !== undefined) {
              resultStyle[item] = style[item]
          }
      }
      return resultStyle
  } else {
      return contentConfigs.default.style
  }
} */

export function getIsSingle (type) {
  return contentConfigs[type].isSingle
}
