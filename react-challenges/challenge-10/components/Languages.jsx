import { languages } from '../languages'

export const Languages = ({wrongGuessesCount}) => {
    const langChips = languages.map((lang, index) => {
        const isLost = index < wrongGuessesCount
        
        return (
            <span 
                key={lang.name} 
                className={isLost ? 'lost-lang' : ''}
                style={{
                    background: lang.backgroundColor,
                    color: lang.color,
                    borderRadius: '0.25rem',
                    padding: '0.3rem 0.7rem',
                    fontWeight: 'bold',
                    position: 'relative',
                    overflow: 'hidden'
                    }}
            >
                {lang.name}
            </span>
        )
    })

    return (
        <section className='chips'>
            {langChips}
        </section>
    )
}