import contentConfigs from '@/publicDefine/contentTypeConfig'
export const getCurrentComponentConfig = (type: string) => {
  if (type !== 'default') {
    const config = contentConfigs[type]
    const style = config.style
    let resultStyle = {}
    for (let item in style) {
      console.log(style, style[item])
      if  (style[item] !== undefined) {
        resultStyle[item] = style[item]
      }
    }
    return resultStyle
  } else {
    return
  }
}