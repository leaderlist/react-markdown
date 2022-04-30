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
  QuoteIcon,
  H1Icon,
  H2Icon,
  H3Icon,
  H4Icon,
  H5Icon,
  H6Icon,
  InlineFormulacon,
  BlockFormulacon
} from '../myIcon'

export const IconStyle = {
  width: 24,
  height: 24,
  lineHeight: '24px'
}

const childrenStyle = {
  width: 16,
  height: 16,
  lineHeight: '16px'
}

function showTipMessageHandle (showed, setShowed) {
  return function () {
    console.log('鼠标滑过，需要显示提示信息')
    setShowed(true)
  }
}

function hidenTipMessage (showed, setShowed) {
  return function () {
    console.log('鼠标离开，需要隐藏提示信息')
    setShowed(false)
  }
}

export const leftBar: ToolItemList  = [
  {
    name: 'Title',
    tip: '标题',
    type: ToolItemType.toolGroup,
    icon: <TitleIcon style={IconStyle} />,
    childToolList: [
      {
        icon: <H1Icon style={childrenStyle} />,
        message: '一级标题'
      },
      {
        icon: <H2Icon style={childrenStyle} />,
        message: '二级标题'
      },
      {
        icon: <H3Icon style={childrenStyle} />,
        message: '三级标题'
      },
      {
        icon: <H4Icon style={childrenStyle} />,
        message: '四级标题'
      },
      {
        icon: <H5Icon style={childrenStyle} />,
        message: '五级标题'
      },
      {
        icon: <H6Icon style={childrenStyle} />,
        message: '六级标题'
      }
    ],
    childType: ToolItemType.hasIcon,
    isCustom: true,
    onMouseEnter: showTipMessageHandle,
    onMouseLeave: hidenTipMessage,
    onClick: function (e) {
      console.log(e)
    }
  },
  {
    name: 'Bold',
    tip: '加粗',
    type: ToolItemType.singleTool,
    icon: <BoldOutlined style={IconStyle} />,
    childToolList: null,
    isCustom: false,
    onMouseEnter: showTipMessageHandle,
    onMouseLeave: hidenTipMessage,
    onClick: function (e) {
      console.log(e)
    }
  },
  {
    name: 'Italic',
    tip: '斜体',
    type: ToolItemType.singleTool,
    icon: <ItalicOutlined style={IconStyle} />,
    childToolList: null,
    isCustom: false,
    onMouseEnter: showTipMessageHandle,
    onMouseLeave: hidenTipMessage,
    onClick: function (e) {
      console.log(e)
    }
  },
  {
    name: 'Quote',
    tip: '引用',
    type: ToolItemType.singleTool,
    icon: <QuoteIcon style={IconStyle} />,
    childToolList: null,
    isCustom: true,
    onMouseEnter: showTipMessageHandle,
    onMouseLeave: hidenTipMessage,
    onClick: function (e) {
      console.log(e)
    }
  },
  {
    name: 'Link',
    tip: '链接',
    type: ToolItemType.singleTool,
    icon: <LinkOutlined style={IconStyle} />,
    childToolList: null,
    isCustom: false,
    onMouseEnter: showTipMessageHandle,
    onMouseLeave: hidenTipMessage,
    onClick: function (e) {
      console.log(e)
    }
  },
  {
    name: 'Picture',
    tip: '图片',
    type: ToolItemType.singleTool,
    icon: <PictureOutlined style={IconStyle} />,
    childToolList: null,
    isCustom: false,
    onMouseEnter: showTipMessageHandle,
    onMouseLeave: hidenTipMessage,
    onClick: function (e) {
      console.log(e)
    }
  },
  {
    name: 'Code',
    tip: '代码',
    type: ToolItemType.singleTool,
    icon: <CodeIcon style={IconStyle} />,
    childToolList: null,
    isCustom: true,
    onMouseEnter: showTipMessageHandle,
    onMouseLeave: hidenTipMessage,
    onClick: function (e) {
      console.log(e)
    }
  },
  {
    name: 'CodeBlock',
    tip: '代码片段',
    type: ToolItemType.singleTool,
    icon: <CodeBlockIcon style={IconStyle} />,
    childToolList: null,
    isCustom: true,
    onMouseEnter: showTipMessageHandle,
    onMouseLeave: hidenTipMessage,
    onClick: function (e) {
      console.log(e)
    }
  },
  {
    name: 'CodeSnippet',
    tip: '代码块',
    type: ToolItemType.singleTool,
    icon: <CodeSnippetIcon style={IconStyle} />,
    childToolList: null,
    isCustom: true,
    onMouseEnter: showTipMessageHandle,
    onMouseLeave: hidenTipMessage,
    onClick: function (e) {
      console.log(e)
    }
  },
  {
    name: 'UnorderedList',
    tip: '无序列表',
    type: ToolItemType.singleTool,
    icon: <UnorderedListOutlined style={IconStyle} />,
    childToolList: null,
    isCustom: false,
    onMouseEnter: showTipMessageHandle,
    onMouseLeave: hidenTipMessage,
    onClick: function (e) {
      console.log(e)
    }
  },
  {
    name: 'OrderedList',
    tip: '有序列表',
    type: ToolItemType.singleTool,
    icon: <OrderedListOutlined style={IconStyle} />,
    childToolList: null,
    isCustom: false,
    onMouseEnter: showTipMessageHandle,
    onMouseLeave: hidenTipMessage,
    onClick: function (e) {
      console.log(e)
    }
  },
  {
    name: 'DeleteLine',
    tip: '删除线',
    type: ToolItemType.singleTool,
    icon: <DisconnectOutlined style={IconStyle} />,
    childToolList: null,
    isCustom: false,
    onMouseEnter: showTipMessageHandle,
    onMouseLeave: hidenTipMessage,
    onClick: function (e) {
      console.log(e)
    }
  },
  {
    name: 'TaskList',
    tip: '任务列表',
    type: ToolItemType.singleTool,
    icon: <CheckSquareOutlined style={IconStyle} />,
    childToolList: null,
    isCustom: false,
    onMouseEnter: showTipMessageHandle,
    onMouseLeave: hidenTipMessage,
    onClick: function (e) {
      console.log(e)
    }
  },
  {
    name: 'Form',
    tip: '表格',
    type: ToolItemType.singleTool,
    icon: <TableOutlined style={IconStyle} />,
    childToolList: null,
    isCustom: false,
    onMouseEnter: showTipMessageHandle,
    onMouseLeave: hidenTipMessage,
    onClick: function (e) {
      console.log(e)
    }
  },
  {
    name: 'Formula',
    tip: '公式',
    type: ToolItemType.toolGroup,
    icon: <FormulaIcon style={IconStyle} />,
    childToolList: [
      {
        icon: <InlineFormulacon style={childrenStyle} />,
        message: '行内公式'
      },
      {
        icon: <BlockFormulacon style={childrenStyle} />,
        message: '块级公式'
      }
    ],
    childType: ToolItemType.hasIcon,
    isCustom: true,
    onMouseEnter: showTipMessageHandle,
    onMouseLeave: hidenTipMessage,
    onClick: function (e) {
      console.log(e)
    }
  },
  {
    name: 'Chart',
    tip: '图表',
    type: ToolItemType.toolGroup,
    icon: <ApartmentOutlined style={IconStyle} />,
    childToolList: [
      {
        icon: null,
        message: 'Mermaid图表'
      },
      {
        icon: null,
        message: '流程图'
      },
      {
        icon: null,
        message: '时序图'
      },
      {
        icon: null,
        message: '类图'
      },
      {
        icon: null,
        message: '状态图'
      },
      {
        icon: null,
        message: '关系图'
      },
      {
        icon: null,
        message: '旅程图'
      },
      {
        icon: null,
        message: '甘特图'
      },
      {
        icon: null,
        message: '饼状图'
      },
      {
        icon: null,
        message: '开发中......'
      }
    ],
    childType: ToolItemType.notHasIcon,
    isCustom: false,
    onMouseEnter: showTipMessageHandle,
    onMouseLeave: hidenTipMessage,
    onClick: function (e) {
      console.log(e)
    }
  },
  {
    name: 'Theme',
    tip: '主题',
    type: ToolItemType.toolGroup,
    icon: <AppstoreOutlined style={IconStyle} />,
    childToolList: [
      {
        icon: null,
        message: 'Markdown主题'
      },
      {
        icon: null,
        message: 'juejin'
      },
      {
        icon: null,
        message: 'github'
      },
      {
        icon: null,
        message: 'smartblue'
      },
      {
        icon: null,
        message: 'cyanosis'
      },
      {
        icon: null,
        message: 'changing-cyan'
      },
      {
        icon: null,
        message: 'fancy'
      },
      {
        icon: null,
        message: '开发中......'
      }
    ],
    childType: ToolItemType.notHasIcon,
    isCustom: false,
    onMouseEnter: showTipMessageHandle,
    onMouseLeave: hidenTipMessage,
    onClick: function (e) {
      console.log(e)
    }
  },
  {
    name: 'CodeHighlighting',
    tip: '代码高亮',
    type: ToolItemType.toolGroup,
    icon: <HighlightOutlined style={IconStyle} />,
    childToolList: [
      {
        icon: null,
        message: '代码高亮样式'
      },
      {
        icon: null,
        message: 'a11y-light'
      },
      {
        icon: null,
        message: 'a11y-dark'
      },
      {
        icon: null,
        message: 'agete'
      },
      {
        icon: null,
        message: 'an-old-hope'
      },
      {
        icon: null,
        message: '开发中'
      }
    ],
    childType: ToolItemType.notHasIcon,
    isCustom: false,
    onMouseEnter: showTipMessageHandle,
    onMouseLeave: hidenTipMessage,
    onClick: function (e) {
      console.log(e)
    }
  }
]
