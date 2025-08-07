import { useState, type JSX } from "react";
import { languages } from "./utils/languages.ts";
import { getRandomWord } from "./utils/utils.ts";
import ConfettiContainer from "./components/ConfettiContainer";
import Header from "./components/Header";
import GameStatus from "./components/GameStatus";
import LanguageChips from "./components/LanguageChips";
import GuessWord from "./components/GuessWord";
import AriaLiveStatus from "./components/AriaLiveStatus";
import Keyboard from "./components/Keyboard";
import NewGameButton from "./components/NewGameButton";

const App = (): JSX.Element => {
  const [currentWord, setCurrentWord] = useState<string>((): string =>
    getRandomWord()
  );
  const [guessedLetter, setGuessedLetter] = useState<string[]>([]);

  const numGuessesLeft: number = languages.length - 1;
  const wrongGuessCount: number = guessedLetter.filter(
    (letter: string): boolean => !currentWord.includes(letter)
  ).length;
  const isGameLost: boolean = wrongGuessCount >= languages.length - 1;
  const isGameWon: boolean = currentWord
    .split("")
    .every((letter: string): boolean => guessedLetter.includes(letter));
  const isGameOver: boolean = isGameLost || isGameWon;
  const latestWrongLetter: boolean | "" =
    guessedLetter[guessedLetter.length - 1] &&
    !currentWord.includes(guessedLetter[guessedLetter.length - 1]);

  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  const resetGame = (): void => {
    setCurrentWord(getRandomWord());
    setGuessedLetter([]);
  };

  const addGuessedLetter = (letter: string): void => {
    setGuessedLetter((prevGuesses: string[]): string[] =>
      prevGuesses.includes(letter) ? prevGuesses : [...prevGuesses, letter]
    );
  };

  return (
    <main className="min-h-screen w-screen bg-[#282726] flex flex-col items-center p-12">
      {/* Confetti */}
      {isGameWon && <ConfettiContainer />}

      {/* Header */}
      <Header numGuessesLeft={numGuessesLeft} />

      {/* Status */}
      <GameStatus
        isGameLost={isGameLost}
        isGameOver={isGameOver}
        isGameWon={isGameWon}
        latestWrongLetter={latestWrongLetter}
        wrongGuessCount={wrongGuessCount}
      />

      {/* Languages */}
      <LanguageChips wrongGuessCount={wrongGuessCount} />

      {/* Guess Word */}
      <GuessWord
        currentWord={currentWord}
        guessedLetter={guessedLetter}
        isGameLost={isGameLost}
      />

      {/* A11y */}
      {/* Combined visually-hidden aria-live region for status updates */}
      <AriaLiveStatus
        currentWord={currentWord}
        guessedLetter={guessedLetter}
        numGuessesLeft={numGuessesLeft}
      />

      {/* Keyboard */}
      <Keyboard
        addGuessedLetter={addGuessedLetter}
        alphabets={alphabets}
        currentWord={currentWord}
        guessedLetter={guessedLetter}
        isGameOver={isGameOver}
      />

      {/* New Game Button */}
      {isGameOver && <NewGameButton resetGame={resetGame} />}
    </main>
  );
};

export default App;
