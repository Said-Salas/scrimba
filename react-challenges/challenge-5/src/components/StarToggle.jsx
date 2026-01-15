import starFilled from "../assets/starFilled.svg"
import starEmpty from "../assets/starEmpty.svg"

export const StarToggle = (props) => {
    const { isFilled, handleClick } = props
    let starIcon = isFilled ? starFilled : starEmpty

    return (
        <button
            onClick={handleClick}
            aria-pressed={isFilled}
            aria-label={isFilled ? "Remove from favorites" : "Add to favorites"}
            className="favorite-button"
        >
            <img
                src={starIcon}
                alt={isFilled ? "filled star icon" : "empty star icon"}
                className="favorite"
            />
        </button>
)
}