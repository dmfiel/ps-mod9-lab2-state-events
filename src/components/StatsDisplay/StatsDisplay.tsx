import type { StatsDisplayProps } from '../../types';

// This display shows the statistics calculated from the content's text.
// Besides numeric stats, the display is also updated with red/green styling
// which shows when the creator's input is within the correct range of words.

export function StatsDisplay({ stats, showReadingTime }: StatsDisplayProps) {
  function showTime(seconds: number): string {
    return (
      Math.floor(seconds / 60) +
      ':' +
      Math.floor(seconds % 60)
        .toString()
        .padStart(2, '0')
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-sm text-gray-500">Characters</p>
          <p className="text-2xl font-semibold text-gray-700">
            {stats.characterCount}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Words</p>
          <p
            className={`${
              !stats.maxWords || !stats.minWords
                ? 'text-gray-700'
                : stats.wordCount > stats.maxWords ||
                  stats.wordCount < stats.minWords
                ? 'text-red-500'
                : 'text-green-500'
            } text-2xl font-semibold     `}
          >
            {stats.wordCount}
          </p>
          <p className="text-xs text-gray-500">
            Min: {stats.minWords} | Max: {stats.maxWords}
          </p>
        </div>
        {showReadingTime && (
          <div className="text-center">
            <p className="text-sm text-gray-500">Reading Time</p>
            <p className="text-2xl font-semibold text-gray-700">
              {showTime(stats.readingTime)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
