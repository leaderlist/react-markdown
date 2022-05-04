import { EDIT_MARKDOWN_DATA, DELETE_MARKDOWN_DATA, ADD_MARKDOWN_DATA } from './constant'
import { actionType, markdownDataType } from './reducerType'

const defaultData: Array<markdownDataType> = [
  {
    message: '',
    index: 0,
    type: 'default'
  }
]
export default function markdownReducer (preState = defaultData, action: actionType) {
  const { type, payload } = action
  switch (type) {
    case EDIT_MARKDOWN_DATA:
      preState[payload.index] = payload
      return preState
    case DELETE_MARKDOWN_DATA:
      preState.splice(payload.index, 1)
      return preState
    case ADD_MARKDOWN_DATA:
      return [...preState, payload]
    default:
      return preState
  }
}