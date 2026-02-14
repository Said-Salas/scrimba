export const Keyboard = () => {
    const alphabet = ['abcdefghijklmnopqrstuvxwyz']
    const lettersBtn = [...alphabet].map(letter => (
        <button key={letter}>
            {letter.toUpperCase()}
        </button>
    ))

    return (
        <section>
            {lettersBtn}
        </section>
    )
}