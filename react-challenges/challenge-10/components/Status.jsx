export const Status = ({isGameLost, isGameWon}) => {
    const styles = {
        backgroundColor: isGameWon ? '#10A95B' : isGameLost ? '#BA2A2A' : ''
    }

    return (
        <section className="status" style={styles}>
            <h1>
                {isGameWon ? 'You win!' : isGameLost ? 'Game over!' : ''}
            </h1>
            <p>
                {isGameWon ? 'Well done! 🎉' : isGameLost ? 'You lose! Better start learning Assembly 😭' : ''}
            </p>
        </section>
    )
}