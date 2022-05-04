import React, { MouseEvent/* , MouseEventHandler */ } from 'react'
export enum ToolItemType {
  singleTool = 0,
  toolGroup = 1,
  hasIcon,
  notHasIcon
}

export type childrenToolType = {
  icon: any,
  message: string,
  key?: React.Attributes['key'],
  isTitle?: boolean
}

/**
 * @interface ToolItem
 * @description ToolItem 组件接受的props 参数的类型
 */
export interface ToolItemProps {
  name: string,
  tip: string,
  type: ToolItemType.singleTool | ToolItemType.toolGroup,
  icon: any,
  childToolList: Array<childrenToolType> | null,
  childType?: ToolItemType.hasIcon | ToolItemType.notHasIcon,
  component?: any,
  style?: Object,
  isCustom: boolean,
  onMouseEnter: (state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>>) => any,
  onMouseLeave: (state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>>) => any,
  onClick: (e: MouseEvent) => void
}

export type ToolItemList = Array<ToolItemProps>

export type arrowStyleType = {
  top: number,
  right: number
} | null