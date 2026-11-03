const KEYS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
import clsx from "clsx";

interface KeyboardProps {
  onKeyboardClick: (letter: string) => void;
  inactiveLetters: string[],
  activeLetters: string[],
  disabled: boolean,
}

export default function Keyboard({
  onKeyboardClick,
  inactiveLetters,
  activeLetters,
  disabled
}: KeyboardProps) {
  return (
    <section className="flex flex-col items-center gap-2">
      {KEYS.map((row, index) => (
        <div key={index} className="flex gap-2">
          {row.split("").map((letter) => {
            const lowerLetter = letter.toLowerCase();
            const isInactive = inactiveLetters.includes(lowerLetter);
            const isActive = activeLetters.includes(lowerLetter);

            return (
              <button
                key={letter}
                onClick={() => onKeyboardClick(lowerLetter)}
                disabled={disabled || isInactive || isActive}
                className={clsx(
                  "border p-5 rounded-xl size-20",
                  isInactive && "bg-red-400",
                  isActive && "bg-blue-400",
                )}
              >
                {letter}
              </button>
            );
          })}
        </div>
      ))}
    </section>
  );
}
