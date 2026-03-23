import { Header } from "./components/Header"
import { Status } from "./components/Status"
import { Languages } from "./components/Languages"
import { Word } from "./components/Word"
import { Keyboard } from "./components/Keyboard"
import { NewGame } from "./components/NewGame"
import { useState, useEffect } from "react"
import { languages } from './languages'
import { getRandomWord } from "./utils"

export const App = () => {
    const [word, setWord] = useState("")
    const [guessedLetters, setGuessedLetters] = useState([])
    const wrongGuessesCount = guessedLetters.filter(letter => ![...word].includes(letter)).length
    const rightGuessesCount = guessedLetters.filter(letter => [...word].includes(letter)).length
    const [gotNewErrors, setGotNewErrors] = useState(null)
    
    useEffect(() => {
        setWord(getRandomWord())
    }, [])

    useEffect(() => {
         if (wrongGuessesCount > 0) setGotNewErrors(true)
    }, [wrongGuessesCount])

    useEffect(() => {
        if (rightGuessesCount > 0) setGotNewErrors(false)
    }, [rightGuessesCount])

    const isGameLost = wrongGuessesCount >= languages.length - 1
    const isGameWon = [...word].every(letter => guessedLetters.includes(letter))
    const isGameOver = isGameLost || isGameWon

    const newGame = () => {
        setWord(getRandomWord())
        setGuessedLetters([])
        setGotNewErrors(null)
    }

    return (
        <main>  
            <Header />
            <Status isGameWon={isGameWon} isGameLost={isGameLost} wrongGuessCount={wrongGuessesCount} languages={languages} gotNewErrors={gotNewErrors}/>
            <Languages wrongGuessesCount={wrongGuessesCount} languages={languages}/>
            <Word word={word} guessedLetters={guessedLetters}/>
            <Keyboard word={word} guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters} isGameOver={isGameOver}/>
            <NewGame isGameOver={isGameOver} newGame={() => newGame()}/>
        </main>
    )
}