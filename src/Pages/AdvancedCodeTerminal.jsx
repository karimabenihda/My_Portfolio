"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AdvancedCodeTerminal = ({
  lines = [],
  prompt = '>>> ',
  showCursor = true,
  typingSpeed = 50,
  pauseAfterLine = 800,
  className = '',
  onComplete,
}) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [completedLines, setCompletedLines] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [visibleOutput, setVisibleOutput] = useState({});

  const colors = {
    prompt: '#50FA7B',
    keyword: '#FF79C6',
    string: '#F1FA8C',
    output: '#F8F8F2',
  };

const highlightSyntax = (code) => {
    const keywords = ['sh', 'pip', 'python', 'print', 'npm'];
    
    // Split the code to see if the first word is a keyword
    const parts = code.split(' ');
    const firstWord = parts[0];

    if (keywords.includes(firstWord)) {
      // Color the command (pip, sh, etc) pink
      const command = `<span style="color: ${colors.keyword}">${firstWord}</span>`;
      
      // Color the rest of the line (install uvicorn, etc) cyan or a lighter pink
      const rest = parts.slice(1).join(' ');
      const argumentsStyle = `<span style="color: #8BE9FD">${rest}</span>`;
      
      return `${command} ${argumentsStyle}`;
    }

    return code;
  };

  useEffect(() => {
    if (isComplete) return;

    let timeout;
    const currentLine = lines[completedLines];

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
          newLines[completedLines] = fullText.substring(0, currentCharIndex + 1);
          return newLines;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else {
      if (currentLine.output && !visibleOutput[completedLines]) {
        setVisibleOutput((prev) => ({ ...prev, [completedLines]: true }));
      }

      // Check for completion signal
      const outText = currentLine.output || "";
      const isInstalling = outText.includes("━");
      const isDone = outText.includes("100%") || outText.includes("✔") || !isInstalling;

      if (isDone) {
        timeout = setTimeout(() => {
          setCompletedLines((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, pauseAfterLine);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentCharIndex, completedLines, isComplete, lines, typingSpeed, pauseAfterLine, lines[completedLines]?.output]);

  return (
    <div className={`font-mono text-sm leading-relaxed ${className}`}>
      {displayedLines.map((line, index) => (
        <div key={index} className="!mb-2">
          <div className="flex items-start">
            <span style={{ color: colors.prompt }} className="!mr-2 font-bold">{prompt}</span>
            <span dangerouslySetInnerHTML={{ __html: highlightSyntax(line) }} />
          </div>
          {visibleOutput[index] && lines[index]?.output && (
            <div 
              style={{ color: colors.output, marginTop: '4px' }} 
              dangerouslySetInnerHTML={{ __html: lines[index].output }} 
            />
          )}
        </div>
      ))}
      {!isComplete && (
        <div className="flex items-start">
          <span style={{ color: colors.prompt }} className="!mr-2 font-bold">{prompt}</span>
          <span dangerouslySetInnerHTML={{ __html: highlightSyntax(displayedLines[completedLines] || '') }} />
          {showCursor && (
            <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.7, repeat: Infinity }} className="!ml-1 text-white">▌</motion.span>
          )}
        </div>
      )}
    </div>
  );
};

export default AdvancedCodeTerminal;