import { languages } from '../languages'

export const Languages = () => {
    const langChips = languages.map(lang => (
        <div key={lang.name} style={{
            background: lang.backgroundColor,
            color: lang.color,
            borderRadius: '0.25rem',
            padding: '0.3rem 0.7rem'
            }}
        >
            {lang.name}
        </div>
    ))

    return (
        <section className='chips'>
            {langChips}
        </section>
    )
}