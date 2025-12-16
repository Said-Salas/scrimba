import mailIcon from '../src/assets/mail.png'

export const Main = () => {
    return (
        <main>
            <div className="key-info-el">  
                <h1>Said Salas</h1>
                <h2>Engineer</h2>
                <p>@saidtobuild on X</p>
            </div>
            <div className="info-el">
                <button className="email-btn"><img src={mailIcon}/>Email</button>
                <button className="linkedin-btn"><img />LinkedIn</button>
            </div>
        </main>
    )
}