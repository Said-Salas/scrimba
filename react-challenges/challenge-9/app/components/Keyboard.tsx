export const Keyboard = () => {
    const alphabet = 'abcdefghijklmnopqrstuvxwyz'
    const lettersBtn = [...alphabet].map(letter => (
        <button 
            key={letter} 
            className="text-[#1E1E1E] w-[3.5rem] h-[3.5rem] bg-[#FCBA29] border-1 border-[#D7D7D7] rounded text-[1.5rem] font-medium"
        >
            {letter.toUpperCase()}
        </button>
    ))

    return (
        <section className="mt-[4rem] flex gap-2 w-[50%] flex-wrap justify-center">
            {lettersBtn}
        </section>
    )
}