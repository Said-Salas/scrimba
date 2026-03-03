export const NewGame = ({isGameOver}) => {
    return (
        isGameOver ?
        <button className="new-game-btn">
            New Game
        </button> : ''
    )
}