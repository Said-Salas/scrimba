import { useState } from "react"

export const Keyboard = ({word}: {word: string}) => {
   const [guessedLetters, setGuessedLetters] = useState<string[]>([])
    
    const alphabet = 'abcdefghijklmnopqrstuvxwyz'
    const lettersBtn = [...alphabet].map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && word.includes(letter)
        const isWrong = isGuessed && !word.includes(letter)

        return (
            <button 
                key={letter} 
                className={`text-[#1E1E1E] w-[3.5rem] h-[3.5rem] border-1 border-[#D7D7D7] rounded text-[1.5rem] 
                    font-medium cursor-pointer ${isCorrect ? 'bg-[#10A95B]' : isWrong ? 'bg-[#EC5D49]' : 'bg-[#FCBA29]'}`}
                onClick={() => setGuessedLetters(prGL => [...prGL, letter])}
            >
                {letter.toUpperCase()}
            </button>
        )
    })

    return (
        <section className="mt-[4rem] flex gap-2 w-[50%] flex-wrap justify-center">
            {lettersBtn}
        </section>
    )
}