export const Keyboard = ({addLetter}) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetEl = [...alphabet].map(letter => (
        <button key={letter} className="key-btn" onClick={() => addLetter(letter)}>
            {letter.toUpperCase()}
        </button>
    ))

    return (
        <section className="keyboard">
            {alphabetEl}
        </section>
    )
}