import { Header } from "./components/Header"
import { Status } from "./components/Status"
import { Languages } from "./components/Languages"
import { Word } from "./components/Word"
import { Keyboard } from "./components/Keyboard"

export const App = () => {
    return (
        <main>  
            <Header />
            <Status />
            <Languages />
            <Word />
            <Keyboard />
        </main>
    )
}