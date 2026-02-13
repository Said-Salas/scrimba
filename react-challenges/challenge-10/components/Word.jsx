import { useState } from "react"

export const Word = () => {
    const [word, setWord] = useState('react')
    const letters = [...word]
    const lettersEl = letters.map(letter => (
        <span className="letter">
            {letter.toUpperCase()}
        </span>
    ))

    return (
        <section className="letters">
             {lettersEl}
        </section>
    )
}