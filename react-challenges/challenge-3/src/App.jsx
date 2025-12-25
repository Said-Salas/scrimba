import data from '../data'
import { Header } from "./components/Header"
import { Entry } from "./components/Entry"

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

export const App = () => {

    const places = data.map(place => 
        <Entry 
            key={place.id}
            {...place}
        />)

    return(
    <>
        <Header />
        {places}
    </>
    )
    }