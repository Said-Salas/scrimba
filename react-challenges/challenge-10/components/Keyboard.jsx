export const Keyboard = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetEl = [...alphabet].map(letter => (
        <button key={letter} className="key-btn">
            {letter.toUpperCase()}
        </button>
    ))

    return (
        <section className="keyboard">
            {alphabetEl}
        </section>
    )
}