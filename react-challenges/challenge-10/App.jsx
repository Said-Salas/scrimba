import { Header } from "./components/Header"
import { Status } from "./components/Status"
import { Languages } from "./components/Languages"

export const App = () => {
    return (
        <main>  
            <Header />
            <Status />
            <Languages />
        </main>
    )
}