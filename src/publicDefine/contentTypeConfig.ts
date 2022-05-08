interface styleArray {
  [propName: string]: string|number
}
interface colorType {
  color: string | Array<string>
}
export type styleType = styleArray| colorType
export type configType = {
  name: string,
  reg: RegExp|undefined,
  style: styleType,
  content: string | Array<string> | undefined,
  isSingle: boolean
}

const titleStyle = {
  color: '#1ba2f0'
}

const defaultStyle = {
  color: '#000',
  fontWeight: 400,
  fontStyle: 'normal'
}

const contentConfigs: Array<configType> = [
  {
    name: 'h1',
    reg: /^#[\s]([^\n]*)$/,
    style: titleStyle,
    content: '# {}',
    isSingle: true
  },
  {
    name: 'h2',
    reg: /^##[\s]([^\n]*)$/,
    style: titleStyle,
    content: '## {}',
    isSingle: true
  },
  {
    name: 'h3',
    reg: /^###[\s][^\n]*$/,
    style: titleStyle,
    content: '### {}',
    isSingle: true
  },
  {
    name: 'h4',
    reg: /^####[\s][^\n]*$/,
    style: titleStyle,
    content: '#### {}',
    isSingle: true
  },
  {
    name: 'h5',
    reg: /^#####[\s][^\n]*$/,
    style: titleStyle,
    content: '##### {}',
    isSingle: true
  },
  {
    name: 'h6',
    reg: /^######[\s][^\s]*$/,
    style: titleStyle,
    content: '###### {}',
    isSingle: true
  },
  {
    name: 'codeBlockStart',
    reg: /^```.*$/g,
    style: {
      color: '#009e9d'
    },
    content: '```{}\n{}```',
    isSingle: true
  },
  {
    name: 'codeBlockEnd',
    reg: /^```$/g,
    style: {
      color: '#009e9d'
    },
    content: '```{}\n{}```',
    isSingle: true
  },
  {
    name: 'unorderedList',
    reg: /^- /g,
    style: defaultStyle,
    content: '- {}',
    isSingle: true
  },
  {
    name: 'orderedList',
    reg: /^[1-9]+\./,
    style: defaultStyle,
    content: '{}. {}',
    isSingle: true
  },
  {
    name: 'blod',
    reg: /\*\*[^\r]*\*\*/,
    style: {
      color: '#fd7741',
      fontWeight: 700
    },
    content: '**{}**',
    isSingle: false
  },
  {
    name: 'italic',
    reg: /\*[^\r|**]*\*/,
    style: {
      color: '#000000',
      fontStyle: 'italic'
    },
    content: '*{}*',
    isSingle: false
  },
  {
    name: 'quote',
    reg: /^> /,
    style: {
      color: '#fd7741'
    },
    content: '> {}',
    isSingle: true
  },
  {
    name: 'link',
    reg: /\[[^\n]*\]\(.*\)/,
    style: {
      color: ['#fd7741', '#bb51b8']
    },
    content: ['[{}]', '({})'],
    isSingle: false
  },
  {
    name: 'picture',
    reg: /!\[[^\r]*\]\([\S]*\)/,
    style: {
      color: ['#000', '#fd7741', '#bb51b8']
    },
    content: ['!', '[{}]', '({})'],
    isSingle: false
  },
  {
    name: 'code',
    reg: /`.*`/,
    style: {
      color: '#009e9d'
    },
    content: '`{}`',
    isSingle: false
  },
  {
    name: 'deleteLine',
    reg: /~~[^/r]*~~$/,
    style: {
      color: '#009e9d',
      textDecoration: 'line-through'
    },
    content: '~~{}~~',
    isSingle: false
  },
  {
    name: 'default',
    reg: /.*/,
    style: {
      color: '#000',
      fontWeight: 400,
      fontStyle: 'normal'
    },
    content: undefined,
    isSingle: false
  }
]

export default contentConfigs
