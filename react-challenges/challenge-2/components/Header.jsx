import mePhoto from '../src/assets/said.jpeg'

export const Header = () => {
    return (
        <header>
            <img src={mePhoto} alt='A photo of Said Salas' className='me-el'/>
        </header>
    )
}