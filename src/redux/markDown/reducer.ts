import { EDIT_MARKDOWN_DATA, DELETE_MARKDOWN_DATA, ADD_MARKDOWN_DATA } from './constant'
import { actionType, markdownDataType } from './reducerType'
import { getRandomNum } from '@/utils'

export const defaults: markdownDataType = {
  content: '',
  key: getRandomNum(4) + '' + 0,
  index: 0
}
const defaultData: Array<markdownDataType> = [
  defaults
]
export default function markdownReducer(preState = defaultData, action: actionType) {
  const { type, payload } = action
  switch (type) {
    case EDIT_MARKDOWN_DATA:
      const targetData = preState[payload.index]
      preState[payload.index] = {
        ...targetData,
        content: payload.content,
        key: payload.key
      }
      return preState.splice(0)
    case DELETE_MARKDOWN_DATA:
      preState.splice(payload.index, 1)
      return preState
    case ADD_MARKDOWN_DATA:
      if (payload.index >= preState.length - 1) {
        preState[preState.length] = payload
      } else {
        for (let i = payload.index; i < preState.length; i++) {
          preState[i].index = preState[i].index + 1
        }
        preState.splice(payload.index, 0, payload)
      }
      return preState
    default:
      return preState
  }
}
