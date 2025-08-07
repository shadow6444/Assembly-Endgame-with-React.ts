import clsx from "clsx";
import type { JSX } from "react";

type GuessWordProps = {
  currentWord: string;
  isGameLost: boolean;
  guessedLetter: string[];
};

const GuessWord = ({
  currentWord,
  isGameLost,
  guessedLetter,
}: GuessWordProps): JSX.Element => {
  return (
    <section className="mt-8 flex gap-1 flex-wrap justify-center">
      {currentWord
        .split("")
        .map((letter: string, index: number): JSX.Element => {
          const isLetterNotInclude: boolean =
            isGameLost && !guessedLetter.includes(letter);
          const classname: string = clsx(
            "bg-[#323232] text-[#F9F4DA] border-b border-b-[#F9F4DA] font-bold text-xl flex items-center justify-center w-10 h-10",
            {
              "text-[#ec5d49]": isLetterNotInclude,
            }
          );

          return (
            <span key={index} className={classname}>
              {guessedLetter.includes(letter) && letter.toUpperCase()}
              {isLetterNotInclude && letter.toUpperCase()}
            </span>
          );
        })}
    </section>
  );
};

export default GuessWord;
