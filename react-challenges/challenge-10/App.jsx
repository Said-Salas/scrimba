import { Header } from "./components/Header"
import { Status } from "./components/Status"
import { Languages } from "./components/Languages"
import { Word } from "./components/Word"
import { Keyboard } from "./components/Keyboard"
import { NewGame } from "./components/NewGame"
import { useEffect, useState } from "react"
import { languages } from './languages'

export const App = () => {
    const [word, setWord] = useState('react')
    const [guessedLetters, setGuessedLetters] = useState([])
    const [isGameOver, setIsGameOver] = useState(false)
    const wrongGuessesCount = guessedLetters.filter(letter => ![...word].includes(letter)).length
    useEffect(() => {
        if (wrongGuessesCount >= languages.length - 1) setIsGameOver(!isGameOver)
    }, [wrongGuessesCount])


    return (
        <main>  
            <Header />
            <Status />
            <Languages wrongGuessesCount={wrongGuessesCount} languages={languages}/>
            <Word word={word} guessedLetters={guessedLetters}/>
            <Keyboard word={word} guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters} isGameOver={isGameOver}/>
            <NewGame isGameOver={isGameOver}/>
        </main>
    )
}