import { EDIT_MARKDOWN_DATA, DELETE_MARKDOWN_DATA, ADD_MARKDOWN_DATA } from './constant'
import { editMarkdown } from './reducerType'

export const editMarkdownData: editMarkdown = (payload) => ({ type: EDIT_MARKDOWN_DATA, payload })
export const addMarkdownData: editMarkdown = (payload) => ({ type: ADD_MARKDOWN_DATA, payload })
export const deleteMarkdownData: editMarkdown = (payload) => ({ type: DELETE_MARKDOWN_DATA, payload })