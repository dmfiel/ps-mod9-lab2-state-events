import './App.css';
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';
import type { CharacterCounterProps } from './types';

function App() {
  const charCount: CharacterCounterProps = {
    minWords: 100,
    maxWords: 200,
    targetReadingTime: 2
  };
  return <CharacterCounter {...charCount} />;
}

export default App;
