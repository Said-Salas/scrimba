import { languages } from "@/languages"

export const Languages = () => {
    const langChips = languages.map(lang => (
        <span 
            key={lang.name} 
            style={{
                backgroundColor: lang.backgroundColor,
                color: lang.color,
            }}
            className="py-2 px-4 rounded font-bold"
        >{lang.name}
        </span>
    ))

    return (
        <section className="flex flex-wrap gap-1 w-[24rem] justify-center mt-[3rem] max-w-[20rem]">
            {langChips}
        </section>
    )
}