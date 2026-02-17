import { Header } from "./components/Header"
import { Status } from "./components/Status"
import { Languages } from "./components/Languages"
import { Word } from "./components/Word"
import { Keyboard } from "./components/Keyboard"
import { NewGame } from "./components/NewGame"
import { useState } from "react"

export const App = () => {
    const [guessedLetters, setGuessedLetters] = useState([])
    const addLetter = (letter) => {
        setGuessedLetters(prevGL => [...prevGL, letter])
    }
    console.log(guessedLetters)

    return (
        <main>  
            <Header />
            <Status />
            <Languages />
            <Word />
            <Keyboard addLetter={(letter) => addLetter(letter)}/>
            <NewGame />
        </main>
    )
}