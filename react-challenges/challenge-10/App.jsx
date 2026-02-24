import { Header } from "./components/Header"
import { Status } from "./components/Status"
import { Languages } from "./components/Languages"
import { Word } from "./components/Word"
import { Keyboard } from "./components/Keyboard"
import { NewGame } from "./components/NewGame"
import { useState } from "react"

export const App = () => {
    const [word, setWord] = useState('react')
    
    return (
        <main>  
            <Header />
            <Status />
            <Languages />
            <Word word={word}/>
            <Keyboard word={word}/>
            <NewGame />
        </main>
    )
}