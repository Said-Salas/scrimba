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
            img={place.img}
            title={place.title}
            country={place.country}
            maps={place.googleMapsLink}
            dates={place.dates}
            text={place.text}
        />)

    return(
    <>
        <Header />
        {places}
    </>

    )
    }