export const Status = ({isGameLost, isGameWon}: {isGameLost: boolean, isGameWon: boolean}) => {
    return (
        <section className={`flex flex-col items-center justify-center w-[61%] h-[4rem] ${isGameWon ? 'bg-[#10A95B]' : isGameLost ? 'bg-[#BA2A2A]' : ''} rounded-[0.25rem] mt-[1.5rem]
            text-[#F9F4DA]`}
        >
            {isGameWon ? 
                (
                    <>
                        <h2 className="text-[1.5rem] font-bold mb-[-0.25rem] w-fit">You win!</h2>
                        <p className="font-semibold text-[1.12rem] w-fit">Well done! 🎉</p>
                    </>
                ) : isGameLost ? (
                    <>
                        <h2 className="text-[1.5rem] font-bold mb-[-0.25rem] w-fit">Game over!</h2>
                        <p className="font-semibold text-[1.12rem] w-fit">You lose! Better start learning Assembly 😭</p>
                    </>
                ) : null
            }
        </section> 
    )
}