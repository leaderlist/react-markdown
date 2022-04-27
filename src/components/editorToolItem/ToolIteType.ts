export enum ToolItemType {
  singleTool = 0,
  toolGroup = 1
}

/**
 * @interface ToolItemProps
 * @description ToolItem 组件接受的props 参数的类型
 * @param tip 传入的工具组件的类型，比如： 标题/加粗
 * @param type value: 0|1 0: 单独工具，点击可用 1: 工具群，划过可以下拉工具列表，无法点击
 */
export interface ToolItemProps {
  tip: string,
  type: ToolItemType.singleTool|ToolItemType.toolGroup,
  component: any
}