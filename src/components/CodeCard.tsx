import { useState, useEffect } from 'react';

interface CodeCardProps {
  title: string;
  language: string;
  code: string;
  delay?: number;
  className?: string;
}

const CodeCard = ({ title, language, code, delay = 0, className = '' }: CodeCardProps) => {
  const [typedCode, setTypedCode] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (currentIndex < code.length) {
      const timeout = setTimeout(() => {
        setTypedCode(prev => prev + code[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, code, started]);

  const highlightCode = (code: string) => {
    return code
      .replace(/\/\/.*$/gm, '<span class="text-code-comment">$&</span>')
      .replace(/\b(const|let|var|function|class|import|export|from|return|if|else|for|while|try|catch)\b/g, '<span class="text-code-keyword font-bold">$1</span>')
      .replace(/'([^']*)'|"([^"]*)"/g, '<span class="text-code-string">$&</span>')
      .replace(/\b([A-Za-z_$][A-Za-z0-9_$]*)\s*\(/g, '<span class="text-code-function">$1</span>(')
      .replace(/\b([a-z_$][a-zA-Z0-9_$]*)\b(?![("'])/g, '<span class="text-code-variable">$1</span>');
  };

  const highlightCodeWhite = (code: string) => {
    return code
      .replace(/\/\/.*$/gm, '<span class="text-gray-500">$&</span>')
      .replace(/\b(const|let|var|function|class|import|export|from|return|if|else|for|while|try|catch)\b/g, '<span class="text-blue-600 font-bold">$1</span>')
      .replace(/'([^']*)'|"([^"]*)"/g, '<span class="text-green-600">$&</span>')
      .replace(/\b([A-Za-z_$][A-Za-z0-9_$]*)\s*\(/g, '<span class="text-orange-600">$1</span>(')
      .replace(/\b([a-z_$][a-zA-Z0-9_$]*)\b(?![("'])/g, '<span class="text-purple-600">$1</span>');
  };

  return (
    <div className={`group bg-white rounded-xl border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden hover:shadow-xl shadow-lg ${className}`}>
      {/* IDE Header */}
      <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-700 font-mono text-sm">{title}</span>
          </div>
          <div className="text-gray-500 font-mono text-xs">{language}</div>
        </div>
      </div>

      {/* Code Content */}
      <div className="bg-white p-3 sm:p-4 font-mono text-xs sm:text-sm leading-relaxed min-h-[150px] sm:min-h-[200px]">
        <pre className="text-gray-800 whitespace-pre-wrap">
          <code 
            dangerouslySetInnerHTML={{ 
              __html: highlightCodeWhite(typedCode) 
            }}
          />
          {currentIndex < code.length && (
            <span className="animate-blink border-r-2 border-gray-800 ml-1"></span>
          )}
        </pre>
      </div>
    </div>
  );
};

export default CodeCard;