interface HangmanWordProps {
  word: string;
  selectedLetters: string[];
  isWin: boolean;
  isLose: boolean;
}

export default function HangmanWord({
  word,
  selectedLetters,
  isWin,
  isLose,
}: HangmanWordProps) {
  return (
    <section className="flex gap-7">
      {word.split("").map((letter, index) => {
        return (
          <span
            key={index}
            className="font-bold uppercase text-7xl border-b-4 border-black"
          >
            <span
              className={
                isWin
                  ? "visible text-green-600"
                  : isLose
                    ? "visible text-black"
                    : selectedLetters.includes(letter)
                      ? "visible text-black"
                      : "invisible"
              }
            >
              {letter}
            </span>
          </span>
        );
      })}
    </section>
  );
}
