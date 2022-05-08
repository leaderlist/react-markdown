import React, { useEffect, useRef } from 'react'
type props = {
  children: any
}
export const H1:React.FC<props> = ({ children }) => {
  const h1Ref = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    h1Ref.current && (h1Ref.current.innerHTML = children)
    console.log(children)
  }, [children])
  return (
    <h1 className="data-title custom-h1" ref={h1Ref}>
    </h1>)
}
export const H2:React.FC<props> = ({ children }) => {
  const h2Ref = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    h2Ref.current && (h2Ref.current.innerHTML = children)
    console.log(children)
  }, [children])
  return (
    <h2 className="data-title custom-h2" ref={h2Ref}>
    </h2>)
}
export const H3:React.FC<props> = ({ children }) => {
  const h3Ref = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    h3Ref.current && (h3Ref.current.innerHTML = children)
    console.log(children)
  }, [children])
  return (
    <h3 className="data-title custom-h3" ref={h3Ref}>
    </h3>)
}
export const H4:React.FC<props> = ({ children }) => {
  const h4Ref = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    h4Ref.current && (h4Ref.current.innerHTML = children)
    console.log(children)
  }, [children])
  return (
    <h4 className="data-title custom-h4" ref={h4Ref}>
    </h4>)
}
export const H5:React.FC<props> = ({ children }) => {
  const h5Ref = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    h5Ref.current && (h5Ref.current.innerHTML = children)
    console.log(children)
  }, [children])
  return (
    <h5 className="data-title custom-h5" ref={h5Ref}>
    </h5>)
}
export const H6:React.FC<props> = ({ children }) => {
  const h6Ref = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    h6Ref.current && (h6Ref.current.innerHTML = children)
    console.log(children)
  }, [children])
  return (
    <h6 className="data-title custom-h6" ref={h6Ref}>
    </h6>)
}
export const P:React.FC<props> = ({ children }) => {
  const pRef = useRef<HTMLParagraphElement>(null)
  useEffect(() => {
    pRef.current && (pRef.current.innerHTML = children)
    console.log(children)
  }, [children])
  return (
    <p className="data-paragraph" ref={pRef}>
    </p>)
}
export const Quote:React.FC<props> = ({ children }) => {
  const quoteRef = useRef<HTMLQuoteElement>(null)
  useEffect(() => {
    quoteRef.current && (quoteRef.current.innerHTML = children)
    console.log(children)
  }, [children])
  return (
    <blockquote className="data-quote" ref={quoteRef}>
    </blockquote>)
}
export const Ul:React.FC<props> = ({ children }) => {
  const ulRef = useRef<HTMLUListElement>(null)
  useEffect(() => {
    ulRef.current && (ulRef.current.innerHTML = `<li>${children}</li>`)
    console.log(children)
  }, [children])
  return (
    <ul className="data-ul" ref={ulRef}>
      <li></li>
    </ul>)
}
/* export const Li:React.FC<props> = ({ children }) => {
  const liRef = useRef<HTMLLIElement>(null)
  useEffect(() => {
    liRef.current && (liRef.current.innerHTML = children)
    console.log(children)
  }, [children])
  return (
    <li className="data-quote" ref={liRef}>
    </li>)
} */
export const Ol:React.FC<props> = ({ children }) => {
  const olRef = useRef<HTMLOListElement>(null)
  useEffect(() => {
    olRef.current && (olRef.current.innerHTML = `<li>${children}</li>`)
    console.log(children)
  }, [children])
  return (
    <ol className="data-ol" ref={olRef}>
      <li></li>
    </ol>)
}
export const CodeBlock:React.FC<props> = ({ children }) => {
  const codeBlockRef = useRef<HTMLElement>(null)
  useEffect(() => {
    codeBlockRef.current && (codeBlockRef.current.innerHTML = children)
    console.log(children)
  }, [children])
  return (
    <code className="data-code-block" ref={codeBlockRef}>
    </code>)
}

export type configType = {
  name: string,
  reg: RegExp
}
export const lineTyoeConfig: Array<configType> = [
  {
    name: 'h1',
    reg: /^#[\s]([^\n]*)$/
  },
  {
    name: 'h2',
    reg: /^##[\s]([^\n]*)$/
  },
  {
    name: 'h3',
    reg: /^###[\s]([^\n]*)$/
  },
  {
    name: 'h4',
    reg: /^####[\s]([^\n]*)$/
  },
  {
    name: 'h5',
    reg: /^#####[\s]([^\n]*)$/
  },
  {
    name: 'h6',
    reg: /^######[\s]([^\n]*)$/
  },
  {
    name: 'quote',
    reg: /^> (.*)/
  },
  {
    name: 'codeBlock',
    reg: /^```(.*)$/
  },
  {
    name: 'codeBlockEnd',
    reg: /^```$/
  },
  {
    name: 'unorderedList',
    reg: /^- (.*)/
  },
  {
    name: 'orderedList',
    reg: /^[1-9]+\. (.*)/
  },
  {
    name: 'default',
    reg: /(.*)/
  }
]

export const contentConfig = [
  {
    name: 'blod',
    reg: /\*\*([^\r|^*{1,2}]*)\*\*/
  },
  {
    name: 'italic',
    reg: /\*([^\r|^*]*)\*/
  },
  {
    name: 'link',
    reg: /\[[^\n]*\]\(.*\)/
  },
  {
    name: 'picture',
    reg: /!\[([^\r]*)\]\(([\S]*)\)/
  },
  {
    name: 'code',
    reg: /`([^`]+)`/
  },
  {
    name: 'deleteLine',
    reg: /~~([^/r]+)~~$/
  }
]