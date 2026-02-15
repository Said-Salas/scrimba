export const Keyboard = () => {
    const alphabet = ['abcdefghijklmnopqrstuvxwyz']
    const lettersBtn = [...alphabet].map(letter => (
        <button key={letter} className="text-[#1E1E1E] w-[2rem] h-[2rem] bg-[#FCBA29] border-2 border-[#D7D7D7]">
            {letter.toUpperCase()}
        </button>
    ))

    return (
        <section className="w-[20rem] mt-[3rem] border-2 border-red-500 gap-0.2 ">
            {lettersBtn}
        </section>
    )
}