import type { JSX } from "react";
import { languages } from "../../utils/languages.ts";
import { getFarewellText } from "../../utils/utils.ts";
import clsx from "clsx";

type GameStatusProps = {
  isGameLost: boolean;
  isGameWon: boolean;
  isGameOver: boolean;
  latestWrongLetter: boolean | string;
  wrongGuessCount: number;
};

const GameStatus = ({
  isGameLost,
  isGameWon,
  isGameOver,
  latestWrongLetter,
  wrongGuessCount,
}: GameStatusProps): JSX.Element => {
  const statusClassName: string = clsx(
    "w-full sm:w-[85%] md:w-[70%] lg:w-[50%] xl:w-[40%] 2xl:w-1/3 min-h-[76px] py-2 rounded-md text-[#F9F4DA] flex flex-col justify-center items-center text-center mt-4",
    {
      "bg-[#BA2A2A]": isGameLost,
      "bg-[#10A95B]": isGameWon,
      "bg-[#7A5EA7] border border-[#323232] border-dashed":
        !isGameOver && latestWrongLetter,
    }
  );

  return (
    <section aria-live="polite" role="status" className={statusClassName}>
      {!isGameOver && latestWrongLetter && (
        <p className="font-normal italic text-sm sm:text-base md:text-lg">
          {getFarewellText(languages[wrongGuessCount - 1].name)}
        </p>
      )}
      {isGameWon && (
        <>
          <h2 className="font-medium text-xl md:text-2xl">You Win!</h2>
          <p className="font-medium text-base md:text-lg">Well Done! 🎉</p>
        </>
      )}
      {isGameLost && (
        <>
          <h2 className="font-medium text-xl md:text-2xl">Game Over!</h2>
          <p className="font-medium text-base md:text-lg">
            You lose! Better start learning Assembly 😭
          </p>
        </>
      )}
    </section>
  );
};

export default GameStatus;
