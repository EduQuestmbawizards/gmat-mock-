import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathTextProps {
  text: string;
  className?: string;
}

export default function MathText({ text, className = '' }: MathTextProps) {
  if (!text) return null;

  // Split text by math delimiters: $$...$$ or $...$ (ignoring escaped \$)
  const parts: React.ReactNode[] = [];
  const regex = /(\$\$[\s\S]*?\$\$|(?<!\\)\$[^\$\n]+?(?<!\\)\$)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Push preceding plain text (unescaping any currency \$)
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index).replace(/\\(\$)/g, '$1'));
    }

    const matchedStr = match[0];
    const isBlock = matchedStr.startsWith('$$');
    const math = isBlock ? matchedStr.slice(2, -2) : matchedStr.slice(1, -1);

    try {
      const html = katex.renderToString(math, {
        displayMode: isBlock,
        throwOnError: false,
      });
      parts.push(
        <span
          key={match.index}
          dangerouslySetInnerHTML={{ __html: html }}
          className="inline-block px-0.5"
        />
      );
    } catch {
      parts.push(matchedStr);
    }

    lastIndex = regex.lastIndex;
  }

  // Push remaining text (unescaping any currency \$)
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex).replace(/\\(\$)/g, '$1'));
  }

  return <span className={className}>{parts}</span>;
}
