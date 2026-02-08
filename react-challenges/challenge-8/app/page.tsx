"use client"

import { useState, useEffect } from "react";
import { Die } from "./components/Die";
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

type Die = {
  value: number
  isHeld: boolean
  id: string
}

export default function Home() {
  const [dice, setDice] = useState<Die[]>([])
  const [firstValue, setFirstValue] = useState(0)
  const gameWon = dice.length > 0 && dice.every(die => die.isHeld)
  const diceEl  = dice.map((die) => <Die 
    key={die.id} 
    value={die.value} 
    held={die.isHeld} 
    hold={() => holdDie(die)}/>)
  
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
  const handleNewGame = () => setDice(getDiceValues())
  const assingFirst = (value: number) => setFirstValue(value)

  useEffect(() => setDice(getDiceValues()), [])

  return (
    <main className="w-[95vw] h-[90vh] bg-white rounded-[0.625rem] flex flex-col justify-center items-center">
      {gameWon ? 
        <Confetti /> 
        : ''
      }
      <h1 className="text-[3.5rem] text-[#2B283A] font-semibold">Tenzies</h1>
      <p className="text-[1.5rem] w-[60%] text-center text-[#4A4E74] font-inter">Roll until all dice are the same. Click a die to freeze it and start the game.</p>
      <div className="grid grid-cols-5 gap-10 w-[80%] mt-[4rem] place-items-center">
        {diceEl}
      </div>
      <button 
        className={`bg-[#5035FF] ${gameWon ? 'w-[14rem]' : 'w-[10rem]'} h-[4rem] rounded-[0.25rem] text-[2rem] font-bold cursor-pointer mt-[3rem] shadow-md`}
        onClick={gameWon ? handleNewGame : handleRoll}
      >
        {gameWon ? 'New Game' : 'Roll'}
      </button>
    </main>
  );
}
