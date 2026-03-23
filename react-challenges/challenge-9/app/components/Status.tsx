import { getFarewellText } from "@/utils"

interface Language {
    name: string
    backgroundColor: string
    color: string
}

export const Status = ({isGameWon, isGameLost, wrongGuessesCount, languages, gotNewErrors}: 
    {isGameWon: boolean, isGameLost: boolean, wrongGuessesCount: number, languages: Language[], gotNewErrors: boolean | null}) => {
    const gotErrors = wrongGuessesCount > 0 
    const gameStatus = () => {
        if (!isGameWon && !isGameLost && gotNewErrors) {
            const language = languages[wrongGuessesCount - 1].name
            const message = getFarewellText(language)

            return (
                <h2 className="text-[1.5rem] font-medium mb-[-0.25rem] w-fit">{message}</h2>
            )
        }
        else if (isGameWon) return (
            <>
                <h2 className="text-[1.5rem] font-bold mb-[-0.25rem] w-fit">You win!</h2>
                <p className="font-semibold text-[1.12rem] w-fit">Well done! 🎉</p>
            </>
        ) 
        else if (isGameLost) return (
            <>
                <h2 className="text-[1.5rem] font-bold mb-[-0.25rem] w-fit">Game over!</h2>
                <p className="font-semibold text-[1.12rem] w-fit">You lose! Better start learning Assembly 😭</p>
            </>
        )
    }

    return (
        <section className={`flex flex-col items-center justify-center w-[61%] h-[4rem] ${isGameWon ? 'bg-[#10A95B]' : isGameLost ? 'bg-[#BA2A2A]' : gotNewErrors ? 'bg-[#7A5EA7]' : ''} 
            rounded-[0.25rem] mt-[1.5rem] text-[#F9F4DA] ${gotNewErrors && !isGameWon && !isGameLost ? 'border-2 border-dashed border-black/40' : ''}`}
        >
            {gameStatus()}
        </section> 
    )
}