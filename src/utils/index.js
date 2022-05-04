import contentConfigs from '@/publicDefine/contentTypeConfig'
export function getToolReg () {
  let configRegs = []
  for(let config in contentConfigs) {
    configRegs.push([contentConfigs[config].reg, config])
  }
  return configRegs
}

export function getEditType (innerText) {
  const configRegs = getToolReg()
  let type = 'default'
  for (let configReg of configRegs) {
    if (innerText.match(configReg[0])) {
      type = configReg[1]
    }
  }
  return type
}