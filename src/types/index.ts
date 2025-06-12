export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in seconds
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in seconds
}

export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
}

export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in seconds
}
