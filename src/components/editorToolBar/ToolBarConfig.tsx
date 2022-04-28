import { ToolItemType , ToolItemList } from '../editorToolItem/ToolIteType'
import React from 'react'

import {
  BoldOutlined,
  ItalicOutlined,
  LinkOutlined,
  PictureOutlined,
  UnorderedListOutlined,
  OrderedListOutlined,
  CheckSquareOutlined,
  DisconnectOutlined,
  TableOutlined,
  ApartmentOutlined,
  AppstoreOutlined,
  HighlightOutlined
} from '@ant-design/icons'

import {
  TitleIcon,
  CodeIcon,
  CodeBlockIcon,
  CodeSnippetIcon,
  FormulaIcon,
  QuoteIcon
} from '../myIcon'

export const IconStyle = {
  width: 24,
  height: 24,
  lineHeight: '24px'
}

export const leftBar: ToolItemList  = [
  {
    name: 'Title',
    tip: '标题',
    type: ToolItemType.toolGroup,
    icon: <TitleIcon style={IconStyle} />,
    childToolList: [],
    childType: ToolItemType.hasIcon,
    isCustom: true,
    onMouseOver: function () {
      return function (e) {
        console.log(e)
      }
    }
  },
  {
    name: 'Bold',
    tip: '加粗',
    type: ToolItemType.singleTool,
    icon: <BoldOutlined style={IconStyle} />,
    childToolList: null,
    isCustom: false,
    onMouseOver: function () {
      return function (e) {
        console.log(e)
      }
    }
  },
  {
    name: 'Italic',
    tip: '斜体',
    type: ToolItemType.singleTool,
    icon: <ItalicOutlined style={IconStyle} />,
    childToolList: null,
    isCustom: false,
    onMouseOver: function () {
      return function (e) {
        console.log(e)
      }
    }
  },
  {
    name: 'Quote',
    tip: '引用',
    type: ToolItemType.singleTool,
    icon: <QuoteIcon style={IconStyle} />,
    childToolList: null,
    isCustom: true,
    onMouseOver: function () {
      return function (e) {
        console.log(e)
      }
    }
  },
  {
    name: 'Link',
    tip: '链接',
    type: ToolItemType.singleTool,
    icon: <LinkOutlined style={IconStyle} />,
    childToolList: null,
    isCustom: false,
    onMouseOver: function () {
      return function (e) {
        console.log(e)
      }
    }
  },
  {
    name: 'Picture',
    tip: '图片',
    type: ToolItemType.singleTool,
    icon: <PictureOutlined style={IconStyle} />,
    childToolList: null,
    isCustom: false,
    onMouseOver: function () {
      return function (e) {
        console.log(e)
      }
    }
  },
  {
    name: 'Code',
    tip: '代码',
    type: ToolItemType.singleTool,
    icon: <CodeIcon style={IconStyle} />,
    childToolList: null,
    isCustom: true,
    onMouseOver: function () {
      return function (e) {
        console.log(e)
      }
    }
  },
  {
    name: 'CodeBlock',
    tip: '代码片段',
    type: ToolItemType.singleTool,
    icon: <CodeBlockIcon style={IconStyle} />,
    childToolList: null,
    isCustom: true,
    onMouseOver: function () {
      return function (e) {
        console.log(e)
      }
    }
  },
  {
    name: 'CodeSnippet',
    tip: '代码块',
    type: ToolItemType.singleTool,
    icon: <CodeSnippetIcon style={IconStyle} />,
    childToolList: null,
    isCustom: true,
    onMouseOver: function () {
      return function (e) {
        console.log(e)
      }
    }
  },
  {
    name: 'UnorderedList',
    tip: '无序列表',
    type: ToolItemType.singleTool,
    icon: <UnorderedListOutlined style={IconStyle} />,
    childToolList: null,
    isCustom: false,
    onMouseOver: function () {
      return function (e) {
        console.log(e)
      }
    }
  },
  {
    name: 'OrderedList',
    tip: '有序列表',
    type: ToolItemType.singleTool,
    icon: <OrderedListOutlined style={IconStyle} />,
    childToolList: null,
    isCustom: false,
    onMouseOver: function () {
      return function (e) {
        console.log(e)
      }
    }
  },
  {
    name: 'DeleteLine',
    tip: '删除线',
    type: ToolItemType.singleTool,
    icon: <DisconnectOutlined style={IconStyle} />,
    childToolList: null,
    isCustom: false,
    onMouseOver: function () {
      return function (e) {
        console.log(e)
      }
    }
  },
  {
    name: 'TaskList',
    tip: '任务列表',
    type: ToolItemType.singleTool,
    icon: <CheckSquareOutlined style={IconStyle} />,
    childToolList: null,
    isCustom: false,
    onMouseOver: function () {
      return function (e) {
        console.log(e)
      }
    }
  },
  {
    name: 'Form',
    tip: '表格',
    type: ToolItemType.singleTool,
    icon: <TableOutlined style={IconStyle} />,
    childToolList: null,
    isCustom: false,
    onMouseOver: function () {
      return function (e) {
        console.log(e)
      }
    }
  },
  {
    name: 'Formula',
    tip: '公式',
    type: ToolItemType.toolGroup,
    icon: <FormulaIcon style={IconStyle} />,
    childToolList: [],
    childType: ToolItemType.hasIcon,
    isCustom: true,
    onMouseOver: function () {
      return function (e) {
        console.log(e)
      }
    }
  },
  {
    name: 'Chart',
    tip: '图表',
    type: ToolItemType.toolGroup,
    icon: <ApartmentOutlined style={IconStyle} />,
    childToolList: [],
    childType: ToolItemType.notHasIcon,
    isCustom: false,
    onMouseOver: function () {
      return function (e) {
        console.log(e)
      }
    }
  },
  {
    name: 'Theme',
    tip: '主题',
    type: ToolItemType.toolGroup,
    icon: <AppstoreOutlined style={IconStyle} />,
    childToolList: [],
    childType: ToolItemType.notHasIcon,
    isCustom: false,
    onMouseOver: function () {
      // eslint-disable-next-line no-debugger
      debugger
      return function (e) {
        console.log(e)
      }
    }
  },
  {
    name: 'CodeHighlighting',
    tip: '代码高亮',
    type: ToolItemType.toolGroup,
    icon: <HighlightOutlined style={IconStyle} />,
    childToolList: [],
    childType: ToolItemType.notHasIcon,
    isCustom: false,
    onMouseOver: function () {
      return function (e) {
        console.log(e)
      }
    }
  }
]
