"use client"

import { useState, useEffect } from "react";
import { Die } from "./components/Die";
import { nanoid } from 'nanoid'

type Die = {
  value: number
  isHeld: boolean
  id: string
}

export default function Home() {
  const [dice, setDice] = useState<Die[]>([])
  const [firstValue, setFirstValue] = useState(0)

  const getDiceValues = () => new Array(10).fill(0).map(() => ({
    value: Math.ceil(Math.random() * 6),
    isHeld: false,
    id: nanoid(),
  }))

  const holdDie = (diePressed: Die) => {
    if (firstValue === 0) {
      assingFirst(diePressed.value)
      setDice(prevDice => prevDice.map(die => die.id == diePressed.id ? {...die, isHeld: !die.isHeld} : die))
    }
    else setDice(prevDice => prevDice.map(die => (die.id === diePressed.id) && (diePressed.value === firstValue) && (diePressed.isHeld === false)? {...die, isHeld: !die.isHeld} : die))
  }

  const handleRoll = () => setDice(prevDice => prevDice.map(die => die.isHeld == false ? {...die, value: Math.ceil(Math.random() * 6)} : die))

  const assingFirst = (value: number) => setFirstValue(value)

  useEffect(() => setDice(getDiceValues()), [])

  if (dice.length > 0 && dice.every(die => die.isHeld)) console.log('Game won!')

  const diceEl  = dice.map((die) => <Die 
    key={die.id} 
    value={die.value} 
    held={die.isHeld} 
    hold={() => holdDie(die)}/>)
  
  return (
    <main className="w-[95vw] h-[90vh] bg-white rounded-[0.625rem] flex flex-col justify-center items-center">
      <h1 className="text-[3.5rem] text-[#2B283A] font-semibold">Tenzies</h1>
      <p className="text-[1.5rem] w-[60%] text-center text-[#4A4E74] font-inter">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="grid grid-cols-5 gap-10 w-[80%] mt-[4rem] place-items-center">
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
