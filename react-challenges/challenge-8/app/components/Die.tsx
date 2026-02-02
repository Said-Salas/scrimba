export const Die = ({ id, value, held, hold }: { id: string, value: number, held: boolean, hold: (id: string) => void}) => (
    <button className={`w-[6rem] h-[6rem] cursor-pointer shadow-md ${held ? 'bg-[#59E391]' : 'bg-[#FFFFFF]'} text-black font-bold text-[2.5rem] 
        rounded-[0.25rem]`} onClick={() => hold(id)}>
        {value}
    </button>
)