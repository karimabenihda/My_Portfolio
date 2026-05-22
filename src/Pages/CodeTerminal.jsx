import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CodeTerminal = ({
  lines = [],
  prompt = '>>> ',
  showCursor = true,
  typingSpeed = 50,
  pauseAfterLine = 800,
  className = '',
  onComplete,
  theme = 'python',
}) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef(null);

  const themeColors = {
    python: {
      prompt: '#66BB6A',
      keyword: '#EC92F1',
      string: '#81E5FF',
      output: '#E0E0E0',
    },
    javascript: {
      prompt: '#FFD54F',
      keyword: '#FF6B9D',
      string: '#4DB8FF',
      output: '#E0E0E0',
    },
    bash: {
      prompt: '#00FF00',
      keyword: '#00FF00',
      string: '#87CEEB',
      output: '#E0E0E0',
    },
    custom: {
      prompt: '#B0B0B0',
      keyword: '#C586C0',
      string: '#6DB3F2',
      output: '#D4D4D4',
    },
  };

  const colors = themeColors[theme];

  const highlightPythonSyntax = (code) => {
    const keywords = ['print', 'def', 'class', 'if', 'else', 'for', 'while', 'import', 'from'];
    const stringRegex = /(['"])(.*?)\1/g;

    let highlighted = code;

    // Highlight strings
    highlighted = highlighted.replace(
      stringRegex,
      `<span style="color: ${colors.string}">$&</span>`
    );

    // Highlight keywords
    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      highlighted = highlighted.replace(
        regex,
        `<span style="color: ${colors.keyword}">${keyword}</span>`
      );
    });

    return highlighted;
  };

  const getSyntaxHighlight = (code, language) => {
    if (language === 'python' || theme === 'python') {
      return highlightPythonSyntax(code);
    }
    return code;
  };

  useEffect(() => {
    if (isComplete) return;

    let timeout;
    const currentLine = lines[currentLineIndex];

    if (!currentLine) {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    const fullText = currentLine.code;

    if (currentCharIndex < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          if (!newLines[currentLineIndex]) {
            newLines[currentLineIndex] = '';
          }
          newLines[currentLineIndex] = fullText.substring(0, currentCharIndex + 1);
          return newLines;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else {
      // Line complete, move to next line
      timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, pauseAfterLine);
    }

    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentLineIndex, isComplete, lines, typingSpeed, pauseAfterLine, onComplete]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative w-full bg-gradient-to-br from-[#0F0F1E] via-[#1A1A2E] to-[#16213E] rounded-lg border border-[#30A0D0]/30 shadow-2xl overflow-hidden ${className}`}
    >
      {/* Terminal Header */}
      <div className="bg-[#1A1A2E] border-b border-[#30A0D0]/20 !px-4 !py-3 flex items-center gap-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF6B6B]" />
          <div className="w-3 h-3 rounded-full bg-[#FFE66D]" />
          <div className="w-3 h-3 rounded-full bg-[#95E1D3]" />
        </div>
        <span className="text-xs font-semibold text-[#30A0D0] !ml-2 tracking-wider uppercase">
          Terminal
        </span>
      </div>

      {/* Terminal Content */}
      <div className="!p-6 font-mono text-sm leading-relaxed">
        {displayedLines.map((line, index) => (
          <div key={index} className="flex items-start">
            <span style={{ color: colors.prompt }} className="!mr-2 font-bold flex-shrink-0">
              {prompt}
            </span>
            <span
              className="break-words"
              style={{ color: colors.string }}
              dangerouslySetInnerHTML={{
                __html: getSyntaxHighlight(line, lines[index]?.language),
              }}
            />
          </div>
        ))}

        {/* Current typing line */}
        {!isComplete && currentLineIndex < lines.length && (
          <div className="flex items-start">
            <span style={{ color: colors.prompt }} className="!mr-2 font-bold flex-shrink-0">
              {prompt}
            </span>
            <span
              style={{ color: colors.string }}
              dangerouslySetInnerHTML={{
                __html: getSyntaxHighlight(
                  displayedLines[currentLineIndex] || '',
                  lines[currentLineIndex]?.language
                ),
              }}
            />
            {showCursor && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{ color: colors.string }}
                className="!ml-1 font-bold"
              >
                ▌
              </motion.span>
            )}
          </div>
        )}

        {/* Output lines (if any) */}
        {isComplete &&
          lines.map((line) => {
            if (line.code.includes('print') || line.code.includes('console.log')) {
              return (
                <motion.div
                  key={line.code}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{ color: colors.output }}
                  className="!mt-2 text-[#00FF41]"
                >
                  hello world
                </motion.div>
              );
            }
            return null;
          })}
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-[#30A0D0]/0 via-[#30A0D0]/5 to-[#30A0D0]/0 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

export default CodeTerminal;