'use client'

export const Word = ({word, guessedLetters, isGameLost}: {word: string, guessedLetters: string[], isGameLost: boolean}) => {
    
    const letters = [...word].map((letter, index) => {
        const showLetter = guessedLetters.includes(letter)

        return (
            <span key={index} className={`${isGameLost && !showLetter? 'text-[#EC5D49]' : 'text-[#F9F4DA]'} bg-[#323232] w-[3.5rem] h-[3.5rem] border-b-2 border-[#F9F4DA]
                font-bold flex justify-center items-center text-[1.75rem]`}
            >
                {isGameLost ? letter.toUpperCase() : showLetter ? letter.toUpperCase() : ''}
            </span> 
        )
    })

    return (
        <section className='flex gap-0.75 mt-[2rem]'>
            {letters}
        </section>
    )
}