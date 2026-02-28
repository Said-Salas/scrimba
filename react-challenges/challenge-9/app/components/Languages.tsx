import { languages } from "@/languages"

export const Languages = ({wrongGuessesCount}: {wrongGuessesCount: number}) => {
    const langChips = languages.map((lang, index) => {
        const isLost = index < wrongGuessesCount
        const lostStyles = isLost ? "before:content-['💀'] before:absolute before:flex before:items-center before:justify-center before:h-full before:w-full before:text-[0.85rem] before:top-0 before:left-0 before:bg-black/70 py-1 px-2 rounded font-bold relative overflow-hidden chip " : 'py-1 px-2 rounded font-bold relative overflow-hidden chip '
        return (
            <span 
                key={lang.name} 
                style={{
                    backgroundColor: lang.backgroundColor,
                    color: lang.color,
                }}
                className={lostStyles}
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