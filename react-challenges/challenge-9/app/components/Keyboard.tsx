import { useState } from "react"

export const Keyboard = ({word}: {word: string}) => {
    const [guessedLet, setGuessedLet] = useState<string>('')
    let match: boolean | null = null
    const determineColor = (letter: string) => {
        setGuessedLet(letter)
        match = [...word].includes(guessedLet)
    }
    

    const alphabet = 'abcdefghijklmnopqrstuvxwyz'
    const lettersBtn = [...alphabet].map(letter => (
        <button 
            key={letter} 
            className={`text-[#1E1E1E] w-[3.5rem] h-[3.5rem] bg-[#FCBA29] border-1 border-[#D7D7D7] rounded text-[1.5rem] 
                font-medium cursor-pointer ${match ? 'bg-[#10A95B]' : 'bg-[#EC5D49]'}`}
            onClick={() => determineColor(letter)}
        >
            {letter.toUpperCase()}
        </button>
    ))

    return (
        <section className="mt-[4rem] flex gap-2 w-[50%] flex-wrap justify-center">
            {lettersBtn}
        </section>
    )
}