"use client"

import { useState, useEffect } from "react";
import { Die } from "./components/Die";
import { nanoid } from 'nanoid'

type Die = {
  value: number
  isHeld: boolean
  id: string
  hold: (id: string) => void
}

export default function Home() {
  const holdDie = (id: string) => setDice(prevDice => prevDice.map(die => die.id == id ? ({...die, isHeld: !die.isHeld}) : ({...die})))
  const getDiceValues = () => new Array(10).fill(0).map(() => ({
    value: Math.ceil(Math.random() * 6),
    isHeld: false,
    id: nanoid(),
    hold: holdDie
  }))
  const [dice, setDice] = useState<Die[]>([])
  useEffect(() => setDice(getDiceValues()), [])
  const diceEl  = dice.map((die) => <Die 
    key={die.id} 
    value={die.value} 
    held={die.isHeld} 
    hold={() => die.hold(die.id)}/>)
  const handleRoll = () => setDice(getDiceValues())

  return (
    <main className="w-[95vw] h-[90vh] bg-white rounded-[0.625rem] flex flex-col justify-center items-center">
      <div className="grid grid-cols-5 gap-10 w-[80%] mt-[8rem] place-items-center">
        {diceEl}
      </div>
      <button 
        className='bg-[#5035FF] w-[10rem] h-[4rem] rounded-[0.25rem] text-[2rem] font-bold cursor-pointer mt-[3rem] shadow-md'
        onClick={handleRoll}
      >
        Roll
      </button>
    </main>
  );
}
