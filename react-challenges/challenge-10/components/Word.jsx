import { useState } from "react"
import { nanoid } from 'nanoid'

export const Word = () => {
    const [word, setWord] = useState('react')
    const letters = [...word].map(letter => (
        <span className="letter" key={nanoid()}>
            {letter.toUpperCase()}
        </span>
    ))

    return (
        <section className="letters">
             {letters}
        </section>
    )
}