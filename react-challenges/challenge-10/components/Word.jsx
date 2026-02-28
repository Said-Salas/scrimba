export const Word = ({word, guessedLetters}) => {
    
    const letters = [...word].map((letter, index) => {
        const showLetter = guessedLetters.includes(letter)

        return (
            <span className="letter" key={index}>
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