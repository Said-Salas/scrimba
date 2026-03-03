interface Language {
    name: string
    backgroundColor: string
    color: string
}

export const Languages = ({wrongGuessesCount, languages}: {wrongGuessesCount: number, languages: Language[]}) => {
    const langChips = languages.map((lang, index) => {
        const isLost = index < wrongGuessesCount
        let langStyles = ''
        if (!(index == languages.length -1)) {
            langStyles = isLost ? "before:content-['💀'] before:absolute before:flex before:items-center before:justify-center before:h-full before:w-full before:text-[0.85rem] before:top-0 before:left-0 before:bg-black/70" : ''
        }
        
        return (
            <span 
                key={lang.name} 
                style={{
                    backgroundColor: lang.backgroundColor,
                    color: lang.color,
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '0.3rem 0.7rem',
                    borderRadius: '0.25rem',
                    fontWeight: 'bold'
                }}
                className={langStyles}
            >
                {lang.name}
            </span>
        )
    })

    return (
        <section className="flex flex-wrap gap-1 w-[40%] justify-center mt-[2rem] max-w-[18.5rem]">
            {langChips}
        </section>
    )
}