export const Languages = ({wrongGuessesCount, languages}) => {
    const langChips = languages.map((lang, index) => {
        let isLost = false
        if (!(index == languages.length - 1)) isLost = index < wrongGuessesCount
        
        return (
            <span 
                key={lang.name} 
                className={isLost ? 'lost-lang' : ''}
                style={{
                    background: lang.backgroundColor,
                    color: lang.color,
                    borderRadius: '0.25rem',
                    padding: '0.3rem 0.7rem',
                    fontWeight: '500',
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