import starFilled from "../assets/starFilled.svg"
import starEmpty from "../assets/starEmpty.svg"

export const StarToggle = (props) => {
    const { isFilled } = props
    let starIcon = isFilled ? starFilled : starEmpty

    const toggleFavorite = () => {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !isFilled
        }))
    }

    return (
        <button
            onClick={toggleFavorite}
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