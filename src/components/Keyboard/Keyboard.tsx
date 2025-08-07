import clsx from "clsx";
import "./Keyboard.css";
import type { JSX } from "react";

type KeyboardProps = {
  alphabets: string;
  guessedLetter: string[];
  currentWord: string;
  addGuessedLetter: (letter: string) => void;
  isGameOver: boolean;
};

const Keyboard = ({
  alphabets,
  guessedLetter,
  currentWord,
  addGuessedLetter,
  isGameOver,
}: KeyboardProps): JSX.Element => {
  return (
    <section className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-1/3 mt-8 flex gap-2 flex-wrap justify-center">
      {alphabets.split("").map((letter: string, index: number): JSX.Element => {
        const isGuessed: boolean = guessedLetter.includes(letter);
        const isCorrect: boolean = isGuessed && currentWord.includes(letter);
        const isWrong: boolean = isGuessed && !currentWord.includes(letter);

        const classname: string = clsx({
          correct: isCorrect,
          wrong: isWrong,
        });

        return (
          <button
            key={index}
            onClick={() => addGuessedLetter(letter)}
            disabled={isGameOver}
            aria-disabled={guessedLetter.includes(letter)}
            aria-label={`Letter ${letter}`}
            className={`bg-[#FCBA29] ${classname} border disabled:opacity-50 disabled:cursor-not-allowed border-[#D7D7D7] rounded-md flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 font-semibold text-[#1E1E1E] text-base sm:text-lg`}
          >
            {letter.toUpperCase()}
          </button>
        );
      })}
    </section>
  );
};

export default Keyboard;
