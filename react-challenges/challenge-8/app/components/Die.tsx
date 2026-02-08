export const Die = ({ value, held, hold }: { value: number, held: boolean, hold: () => void}) => (
    <button className={`w-[6rem] h-[6rem] cursor-pointer shadow-md ${held ? 'bg-[#59E391]' : 'bg-[#FFFFFF]'} text-black font-bold text-[2.5rem] 
        rounded-[0.25rem]`} onClick={hold} aria-label={`Die with value ${value}, ${held ? 'die is held' : 'die not held'}`} aria-pressed={held}>
        {value}
    </button>
)