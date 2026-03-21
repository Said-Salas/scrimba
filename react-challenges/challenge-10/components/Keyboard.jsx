export const Keyboard = ({word, guessedLetters, setGuessedLetters, isGameOver, setGuessResult}) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'

    const alphabetEl = [...alphabet].map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isRight = isGuessed && [...word].includes(letter)
        const isWrong = isGuessed && ![...word].includes(letter)
        const styles = {
            backgroundColor: isRight ? '#10A95B': isWrong ? '#EC5D49' : '#FCBA29'
        }
        const setFunctions = () => {
            setGuessedLetters(prevGL => [...prevGL, letter])
            setGuessResult(prevGuess => prevGuess = isRight ? true : false)
        }

        return (
            <button key={letter} disabled={isGameOver} className="key-btn" style={styles} onClick={() => setFunctions()}>
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