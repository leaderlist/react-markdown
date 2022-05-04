export type configType = {
    reg: RegExp
    color: string
    content: string
}

const titleStyle = {
    color: '#1ba2f0'
}

const contentConfigs = {
    default: {
        reg: undefined,
        style: {
            color: '#000',
            fontWeight: 400,
            fontStyle: 'normal'
        },
        content: undefined
    },
    h1: {
        reg: /^#[\s][^\r]*$/g,
        style: titleStyle,
        content: '# {}'
    },
    h2: {
        reg: /^##[\s][^\r]*$/g,
        style: titleStyle,
        content: '## {}'
    },
    h3: {
        reg: /^###[\s][^\r]*$/g,
        style: titleStyle,
        content: '### {}'
    },
    h4: {
        reg: /^####[\s][^\r]*$/g,
        style: titleStyle,
        content: '#### {}'
    },
    h5: {
        reg: /^#####[\s][^\r]*$/g,
        style: titleStyle,
        content: '##### {}'
    },
    h6: {
        reg: /^######[\s][^\r]*$/g,
        style: titleStyle,
        content: '###### {}'
    },
    blod: {
        reg: /^\*\*[^\r]*\*\*$/g,
        style: {
            color: '#fd7741',
            fontWeight: 700
        },
        content: '**{}**'
    },
    italic: {
        reg: /^\*[^\r|**]*\*$/g,
        style: {
            color: '#000000',
            fontStyle: 'italic'
        },
        content: '*{}*'
    },
    quote: {
        reg: /^> /g,
        style: {
            color: '#fd7741'
        },
        content: '> {}'
    },
    link: {
        reg: /^\[[^\r]*\]\([\S]*\)$/g,
        style: {
            color: ['#fd7741', '#bb51b8']
        },
        content: ['[{}]', '({})']
    },
    picture: {
        reg: /^!\[[^\r]*\]\([\S]*\)$/g,
        style: {
            color: ['#000', '#fd7741', '#bb51b8']
        },
        content: ['!', '[{}]', '({})']
    },
    code: {
        reg: /^`.*`$/g,
        style: {
            color: '#009e9d'
        },
        content: '`{}`'
    },
    codeBlock: {
        reg: /^```[a-z]{0,2}\n.*$/g,
        style: {
            color: '#009e9d'
        },
        content: '```{}\n{}```'
    },
    unorderedList: {
        reg: /^- /g,
        style: {
            color: undefined
        },
        content: '- {}'
    },
    orderedList: {
        reg: /^[1-9]{1,2}/g,
        style: {
            color: undefined
        },
        content: '{}. {}'
    },
    deleteLine: {
        reg: /^~~[^/r]*~~$/g,
        style: {
            color: '#009e9d'
        },
        content: '~~{}~~'
    }
}

export default contentConfigs
