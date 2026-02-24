import { use, useState } from 'react'

export const Keyboard = ({word}) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const [guessedLetters, setGuessedLetters] = useState([])

    const alphabetEl = [...alphabet].map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isRight = isGuessed && [...word].includes(letter)
        const isWrong = isGuessed && ![...word].includes(letter)
        const styles = {
            backgroundColor: isRight ? '#10A95B': isWrong ? '#EC5D49' : '#FCBA29'
        }
        return (
            <button key={letter} className="key-btn" style={styles} onClick={() => setGuessedLetters(prevGL => [...prevGL, letter])}>
                {letter.toUpperCase()}
            </button>
        )
    })

    return (
        <section className="keyboard">
            {alphabetEl}
        </section>
    )
}