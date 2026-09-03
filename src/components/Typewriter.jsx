import { useEffect, useState } from "react";

/**
 * Efeito de máquina de escrever: digita cada palavra, faz uma pausa,
 * apaga e passa para a próxima, em loop. Substitui a antiga lib react-typist.
 */
export default function Typewriter({
  words,
  typingSpeed = 90,
  deletingSpeed = 40,
  pause = 1400,
  cursor = ".",
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    let delay = deleting ? deletingSpeed : typingSpeed;

    if (!deleting && text === word) {
      delay = pause;
    }

    const timer = setTimeout(() => {
      if (!deleting) {
        if (text === word) {
          setDeleting(true);
        } else {
          setText(word.slice(0, text.length + 1));
        }
        return;
      }

      if (text === "") {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length - 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return (
    <>
      {text}
      <span className="typewriter-cursor" aria-hidden="true">
        {cursor}
      </span>
    </>
  );
}
