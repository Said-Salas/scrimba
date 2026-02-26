import { useState } from "react"
import { nanoid } from 'nanoid'

export const Word = ({word, guessedLetters}) => {
    
    const letters = [...word].map(letter => {
        const showLetter = guessedLetters.includes(letter)

        return (
            <span className="letter" key={nanoid()}>
                {showLetter ? letter.toUpperCase() : ''}
            </span>
        )
    })

    return (
        <section className="letters">
             {letters}
        </section>
    )
}