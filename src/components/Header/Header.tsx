import type { JSX } from "react";

const Header = ({ numGuessesLeft }): JSX.Element => {
  return (
    <header className="w-full sm:w-[85%] md:w-[70%] lg:w-[50%] xl:w-[40%] 2xl:w-1/3">
      <h3 className="text-[#F9F4DA] font-medium text-2xl text-center pb-2">
        Assembly: Endgame
      </h3>
      <p className="font-medium text-lg text-center leading-tight text-[#8E8E8E]">
        Guess the word in under {numGuessesLeft} attempts to keep the
        programming world safe from Assembly!
      </p>
    </header>
  );
};

export default Header;
