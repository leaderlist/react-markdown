export type configType = {
  reg: RegExp,
  color: string,
  content: string
}

const contentConfigs = {
  h1: {
    reg: /^# [^\r]*$/g,
    color: '#1ba2f0',
    content: '# {}'
  },
  h2: {
    reg: /^## [^\r]*$/g,
    color: '#1ba2f0',
    content: '## {}'
  },
  h3: {
    reg: /^### [^\r]*$/g,
    color: '#1ba2f0',
    content: '### {}'
  },
  h4: {
    reg: /^#### [^\r]*$/g,
    color: '#1ba2f0',
    content: '#### {}'
  },
  h5: {
    reg: /^##### [^\r]*$/g,
    color: '#1ba2f0',
    content: '##### {}'
  },
  h6: {
    reg: /^###### [^\r]*$/g,
    color: '#1ba2f0',
    content: '###### {}'
  },
  blod: {
    reg: /^\*\*[^\r]*\*\*$/g,
    color: '#fd7741',
    content: '**{}**'
  },
  italic: {
    reg: /^\*[^\r|**]*\*$/g,
    color: '#000000',
    content: '*{}*'
  },
  quote: {
    reg: /^> /g,
    color: '#fd7741',
    content: '> {}'
  },
  link: {
    reg: /^\[[^\r]*\]\([\S]*\)$/g,
    color: [
      '#fd7741',
      '#bb51b8'
    ],
    content: [
      '[{}]',
      '({})'
    ]
  },
  picture: {
    reg: /^!\[[^\r]*\]\([\S]*\)$/g,
    color: [
      '#000',
      '#fd7741',
      '#bb51b8'
    ],
    content: [
      '!',
      '[{}]',
      '({})'
    ]
  },
  code: {
    reg: /^`.*`$/g,
    color: '#009e9d',
    content: '`{}`'
  },
  codeBlock: {
    reg: /^```[a-z]{0,2}\n.*```$/g,
    color: '#009e9d',
    content: '```{}\n{}```'
  },
  unorderedList: {
    reg: /^- /g,
    color: undefined,
    content: '- {}'
  },
  orderedList: {
    reg: /^[1-9]{1,2}/g,
    color: undefined,
    content: '{}. {}'
  },
  deleteLine: {
    reg: /^~~[^/r]*~~$/g,
    color: '#009e9d',
    content: '~~{}~~'
  }
}

export default contentConfigs