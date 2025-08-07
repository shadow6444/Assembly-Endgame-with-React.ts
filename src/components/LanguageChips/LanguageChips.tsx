import type { JSX } from "react";
import clsx from "clsx";
import { languages, type Language } from "../../utils/languages.ts";
import "./LanguageChips.css";

const LanguageChips = ({
  wrongGuessCount,
}: {
  wrongGuessCount: number;
}): JSX.Element => {
  return (
    <section className="flex w-full sm:w-[80%] md:w-[60%] lg:w-[45%] xl:w-1/4 items-center justify-center gap-1 mt-6 flex-wrap">
      {languages.map((lang: Language, index: number): JSX.Element => {
        const isLangLost: boolean = index < wrongGuessCount;
        const classname: string = clsx({
          lost: isLangLost,
        });
        return (
          <span
            key={index}
            className={`rounded p-1  relative font-bold text-sm ${classname}`}
            style={{
              backgroundColor: lang.backgroundColor,
              color: lang.color,
            }}
          >
            {lang.name}
          </span>
        );
      })}
    </section>
  );
};

export default LanguageChips;
