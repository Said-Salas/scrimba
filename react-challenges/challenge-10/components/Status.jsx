export const Status = ({isGameWon, isGameLost}) => {
    const styles = {
        backgroundColor: isGameWon ? '#10A95B' : isGameLost ? '#BA2A2A' : ''
    }

    return (
        <section className="status" style={styles}>
            {isGameWon ? (
                <>
                    <h1>
                        {isGameWon ? 'You win!' : isGameLost ? 'Game over!' : ''}
                    </h1>
                    <p>
                        {isGameWon ? 'Well done! 🎉' : isGameLost ? 'You lose! Better start learning Assembly 😭' : ''}
                    </p>
                </>
            ) : isGameLost ? (
                <>
                <h1>
                    {isGameWon ? 'You win!' : isGameLost ? 'Game over!' : ''}
                </h1>
                <p>
                    {isGameWon ? 'Well done! 🎉' : isGameLost ? 'You lose! Better start learning Assembly 😭' : ''}
                </p></>
            ) : null}
        </section>
    )
}