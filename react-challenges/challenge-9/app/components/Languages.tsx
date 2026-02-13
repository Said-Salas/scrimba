import { languages } from "@/languages"

export const Languages = () => {
    const langChips = languages.map(lang => (
        <span 
            key={lang.name} 
            style={{
                backgroundColor: lang.backgroundColor,
                color: lang.color,
            }}
            className="py-1 px-2 rounded font-bold"
        >{lang.name}
        </span>
    ))

    return (
        <section className="flex flex-wrap gap-1 w-[30%] justify-center mt-[3rem] max-w-[18rem]">
            {langChips}
        </section>
    )
}