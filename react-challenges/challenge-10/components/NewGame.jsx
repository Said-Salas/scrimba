export const NewGame = ({isGameOver, newGame}) => {
    return (
        isGameOver ?
        <button className="new-game-btn" onClick={newGame}>
            New Game
        </button> : ''
    )
}