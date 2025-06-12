import { useState } from 'react';
import type { CharacterCounterProps, TextStats } from '../../types';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';
import { TextInput } from '../TextInput/TextInput';
import { ProgressBar } from './ProgressBar';

// This CharacterCounter component wraps around the text input and
// stat display controls, passing in their props and managing the
// event handler to calculate statistics.

export function CharacterCounter({
  minWords,
  maxWords,
  targetReadingTime
}: CharacterCounterProps) {
  const [stats, setStats] = useState<TextStats>({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
    minWords: minWords,
    maxWords: maxWords,
    targetReadingTime: targetReadingTime
  });

  const [currentTime, setTime] = useState<number>(Date.now());
  const [startTime, _] = useState<number>(Date.now());

  function onTextChange(text: string) {
    const newStats = { ...stats };
    newStats.characterCount = text.length;
    newStats.wordCount = text.length && text.split(' ').length;
    newStats.readingTime = getTime();
    setStats(newStats);
    setTime(Date.now());
  }

  function getTime(): number {
    return Math.floor((currentTime - startTime) / 1000);
  }

  return (
    <div className=" w-full min-w-72 max-w-[1000px] mx-auto px-5 my-5 flex flex-col gap-5">
      <div>
        <h1 className="font-bold text-blue-700 w-full text-center">
          Content Creation Tracker
        </h1>
      </div>
      <StatsDisplay stats={stats} showReadingTime={true}></StatsDisplay>
      {minWords && maxWords ? (
        <div className="w-full h-10">
          <ProgressBar
            minVal={minWords}
            maxVal={maxWords}
            currentVal={stats.wordCount}
          />
        </div>
      ) : (
        ''
      )}
      <TextInput
        onTextChange={text => onTextChange(text)}
        placeholder="Start typing your content here..."
      />
    </div>
  );
}
