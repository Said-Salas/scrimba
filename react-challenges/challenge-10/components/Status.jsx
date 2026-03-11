export const Status = ({isGameWon, isGameLost}) => {
    const styles = { backgroundColor: isGameWon ? '#10A95B' : isGameLost ? '#BA2A2A' : '' }
    const gameStatus = () => {
        if (!isGameWon && !isGameLost) return null
        if (isGameWon) return (
            <>
                <h1>You win!</h1>
                <p>Well done! 🎉</p>
            </>
        )
        else return (
            <>
                <h1>Game over!</h1>
                <p>You lose! Better start learning Assembly 😭</p>
            </>
        )
    }

    return (
        <section className="status" style={styles}>
            {gameStatus()}
        </section>
    )
}