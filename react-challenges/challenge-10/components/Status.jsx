import { getFarewellText } from "../utils"

export const Status = ({isGameWon, isGameLost, wrongGuessCount, languages, guessResult}) => {
    const gotErrors = wrongGuessCount > 0
    const styles = { 
        backgroundColor: isGameWon ? '#10A95B' : isGameLost ? '#BA2A2A' : gotErrors ? '#7A5EA7' : '', 
    }

    const gameStatus = () => {
        if (!isGameWon && !isGameLost && gotErrors && !guessResult) {
            const language = languages[wrongGuessCount - 1].name
            const message = getFarewellText(language)

            return (
                <h1>{message}</h1>
            )
        }
        else if (isGameWon) return (
            <>
                <h1>You win!</h1>
                <p>Well done! 🎉</p>
            </>
        )
        else if (isGameLost) return (
            <>
                <h1>Game over!</h1>
                <p>You lose! Better start learning Assembly 😭</p>
            </>
        )
    }

    return (
        <section className={`status ${gotErrors && !isGameWon && !isGameLost? 'eliminated' : ''}`} style={styles}>
            {gameStatus()}
        </section>
    )
}