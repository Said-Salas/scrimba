import twitterIcon from '../src/assets/twitter.png'
import facebookIcon from '../src/assets/facebook.png'
import instagramIcon from '../src/assets/instagram.png'
import githubIcon from '../src/assets/github.png'

export const Footer = () => {
    return(
        <footer className='footer-el'>
            <a href='https://x.com/saidtobuild'><img src={twitterIcon} alt='Twitter icon'/></a>
            <a href='https://facebook.com'><img src={facebookIcon} alt='Facebook icon'/></a>
            <a href='https://instagram.com'><img src={instagramIcon} alt='Instagram icon'/></a>
            <a href='https://github.com/said-salas'><img src={githubIcon} alt='GitHub Icon'/></a>
        </footer>
    )
}