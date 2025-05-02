import React from 'react';

interface WordCounterProps {
  text: string;
}

const WordCounter: React.FC<WordCounterProps> = ({ text }) => {
  const wordCount = text.trim().split(/\s+/).length;
  const characterCount = text.length;

  return (
    <div className="text-sm text-gray-600">
      Words: {wordCount} | Characters: {characterCount}
    </div>
  );
};

export default WordCounter;