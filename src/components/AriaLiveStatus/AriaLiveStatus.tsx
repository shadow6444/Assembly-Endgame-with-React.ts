import type { JSX } from "react";
import "./AriaLiveStatus.css";

type AriaLiveStatusProps = {
  currentWord: string;
  guessedLetter: string[];
  numGuessesLeft: number;
};

const AriaLiveStatus = ({
  currentWord,
  guessedLetter,
  numGuessesLeft,
}: AriaLiveStatusProps): JSX.Element => {
  return (
    <section className="sr-only" aria-live="polite" role="status">
      <p>
        {currentWord.includes(guessedLetter[guessedLetter.length - 1])
          ? `Correct! The letter ${
              guessedLetter[guessedLetter.length - 1]
            } is in the word.`
          : `Sorry, the letter ${
              guessedLetter[guessedLetter.length - 1]
            } is not in the word.`}
        You have {numGuessesLeft} attempts left.
      </p>
      <p>
        Current word:{" "}
        {currentWord
          .split("")
          .map((letter: string): string =>
            guessedLetter.includes(letter) ? letter + "." : "blank."
          )
          .join(" ")}
      </p>
    </section>
  );
};

export default AriaLiveStatus;
