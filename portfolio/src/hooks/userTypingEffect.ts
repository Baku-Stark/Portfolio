import { useEffect, useState } from 'react';

export function useTypingEffect(text: string, speed: number = 50, repeat: boolean = false) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
            setDisplayedText((prev) => prev + text.charAt(index));
            setIndex((prev) => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else if (repeat) {
            const resetTimeout = setTimeout(() => {
            setDisplayedText('');
            setIndex(0);
            }, 2000); // Dar um tempo maior lendo a frase completa antes de reiniciar
            return () => clearTimeout(resetTimeout);
        }
    }, [index, text, speed, repeat]);

    return displayedText;
}