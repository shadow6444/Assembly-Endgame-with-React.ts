import type { JSX } from "react";
import Confetti from "react-confetti";

const ConfettiContainer = (): JSX.Element => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={1000}
      />
    </div>
  );
};

export default ConfettiContainer;
