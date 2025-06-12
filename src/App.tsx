import './App.css';
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';
import type { CharacterCounterProps } from './types';

// This application provides an interface for a content creator to write
// their posts and get instant feedback on their progress.
// To initiate the CharacterCounter component you can optionally pass in
// the range of words for a good post along with the time that they should
// spend writing the content as parameters.

function App() {
  const charCount: CharacterCounterProps = {
    minWords: 10,
    maxWords: 200,
    targetReadingTime: 2
  };
  return <CharacterCounter {...charCount} />;
}

export default App;
