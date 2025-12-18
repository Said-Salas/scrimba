import mePhoto from '../assets/said.jpeg'

export const Header = () => {
    return (
        <header>
            <img src={mePhoto} alt='A photo of Said Salas' className='profile-photo'/>
        </header>
    )
}