export const Word = ({word, guessedLetters, isGameLost}) => {
    
    const letters = [...word].map((letter, index) => {
        const showLetter = guessedLetters.includes(letter)
        const styles = {
            color: isGameLost && !showLetter ? '#EC5D49' : '#F9F4DA'
        }

        return (
            <span className="letter" key={index} style={styles}>
                {isGameLost ? letter.toUpperCase() : showLetter ? letter.toUpperCase() : ''}
            </span>
        )
    })

    return (
        <section className="letters">
             {letters}
        </section>
    )
}