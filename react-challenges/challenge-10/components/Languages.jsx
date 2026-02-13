import { languages } from '../languages'

export const Languages = () => {
    const langChips = languages.map(lang => (
        <span key={lang.name} style={{
            background: lang.backgroundColor,
            color: lang.color,
            borderRadius: '0.25rem',
            padding: '0.3rem 0.7rem',
            fontWeight: 'bold'
            }}
        >
            {lang.name}
        </span>
    ))

    return (
        <section className='chips'>
            {langChips}
        </section>
    )
}