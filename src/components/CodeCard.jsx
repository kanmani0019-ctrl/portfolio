import { codeSnippet, codeSnippetFile } from '../data/portfolio'
import './CodeCard.css'

/** Lightweight Java syntax highlighter — no highlighting library needed. */
const KEYWORDS = new Set([
  'public', 'private', 'protected', 'class', 'interface', 'record', 'return',
  'new', 'final', 'static', 'void', 'import', 'package', 'extends', 'implements',
  'if', 'else', 'for', 'while', 'try', 'catch', 'throw', 'throws', 'var', 'this',
])

function highlight(line, lineIndex) {
  const tokens = line.split(/(@[A-Za-z]+|"[^"]*"|[A-Za-z_][A-Za-z0-9_]*)/g)
  return tokens.map((token, i) => {
    const key = `${lineIndex}-${i}`
    if (!token) return null
    if (token.startsWith('@')) return <span key={key} className="tok-anno">{token}</span>
    if (token.startsWith('"')) return <span key={key} className="tok-str">{token}</span>
    if (KEYWORDS.has(token)) return <span key={key} className="tok-kw">{token}</span>
    if (/^[A-Z]/.test(token)) return <span key={key} className="tok-type">{token}</span>
    // A lowercase identifier immediately followed by "(" is a method call.
    if (/^[a-z][A-Za-z0-9_]*$/.test(token) && tokens[i + 1]?.startsWith('(')) {
      return <span key={key} className="tok-fn">{token}</span>
    }
    return <span key={key}>{token}</span>
  })
}

/**
 * `snippet` and `file` default to the shared sample in portfolio.js, so a
 * project can pass its own code without every caller having to supply one.
 */
export default function CodeCard({
  snippet = codeSnippet,
  file = codeSnippetFile,
  className = '',
}) {
  const lines = snippet.split('\n')

  return (
    <figure className={`codeCard ${className}`}>
      <figcaption className="codeCard__bar">
        <span className="codeCard__dot codeCard__dot--r" />
        <span className="codeCard__dot codeCard__dot--y" />
        <span className="codeCard__dot codeCard__dot--g" />
        <span className="codeCard__file">{file}</span>
      </figcaption>

      <pre className="codeCard__body">
        {lines.map((line, i) => (
          <div className="codeCard__line" key={i}>
            <span className="codeCard__ln">{i + 1}</span>
            <code>{highlight(line, i)}</code>
          </div>
        ))}
      </pre>
    </figure>
  )
}
