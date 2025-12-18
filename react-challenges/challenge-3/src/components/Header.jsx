import globeIcon from '../assets/globe.png'

export const Header = () => {
    return (
        <header>
            <img src={globeIcon} alt='Globe icon'/>
            <h1>my travel journal.</h1>
        </header>
    )
}