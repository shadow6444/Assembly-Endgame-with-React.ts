import type { JSX } from "react";
import "./NewGameButton.css";

const NewGameButton = ({
  resetGame,
}: {
  resetGame: () => void;
}): JSX.Element => {
  return (
    <div className="z-0 flex items-center justify-center">
      <button
        onClick={resetGame}
        className="reset-game mt-10 bg-[#11B5E5] rounded-md text-[#1E1E1E] font-semibold text-base sm:text-lg px-10 sm:px-16 py-2"
      >
        New Game
      </button>
    </div>
  );
};

export default NewGameButton;
