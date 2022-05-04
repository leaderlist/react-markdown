export interface markdownDataType {
  message: string,
  index: number,
  type: string | 'default'
}

export const defaultData: Array<markdownDataType> = [
  {
    message: '',
    index: 0,
    type: 'default'
  }
]

export type actionType = {type: string, payload: markdownDataType}

export interface editMarkdown {
  (value: markdownDataType): actionType
}