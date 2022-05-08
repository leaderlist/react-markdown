// import { styleType } from '@/publicDefine/contentTypeConfig'
export interface markdownDataType {
  content: string,
  key: string,
  index: number
}

export type actionType = {type: string, payload: markdownDataType}

export interface editMarkdown {
  (value: markdownDataType): actionType
}