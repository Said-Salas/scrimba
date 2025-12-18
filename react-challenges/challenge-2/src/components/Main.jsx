import mailIcon from '../assets/mail.png'
import linkedinIcon from "../assets/linkedin.png"

export const Main = () => {
    return (
        <main>
            <div className="key-info">  
                <h1>Said Salas</h1>
                <h2>Engineer</h2>
                <p>@saidtobuild on X</p>
            </div>
            <div className="info-section">
                <div className='action-buttons'>
                    <a href='mailto:saidsalastech@gmail.com' className="email-btn">
                        <img src={mailIcon} alt='Mail icon'/>
                        Email
                    </a>
                    <a href='https://www.linkedin.com' className='linkedin-btn'>
                        <img src={linkedinIcon} alt='LinkedIn icon'/>
                        LinkedIn
                    </a>
                </div>
                <div className='details-section'>
                    <h3>About</h3>
                    <p>I am an engineer focused on solving all problems. I think
                        the book of nature was written in the language of mathematics, and if
                        the key to solve all problems exists (a super intelligence), it has always been there.
                    </p>
                    <h3>Interests</h3>
                    <p>Learning, nature (specially birds), brains, chess, calisthenics.
                    </p>
                </div> 
            </div>
        </main>
    )
}