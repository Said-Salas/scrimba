"use client"

import { useState, useEffect } from "react";
import { Die } from "./components/Die";

export default function Home() {
  const getDiceValues = () => new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6))
  const [dice, setDice] = useState<number[]>([])
  useEffect(() => setDice(getDiceValues()), [])
  const diceEl  = dice.map((num, index) => <Die key={index} value={num}/>)

  return (
    <main className="w-[95vw] h-[90vh] bg-white rounded-[0.625rem] flex flex-col justify-center items-center">
      <div className="grid grid-cols-5 gap-10 w-[80%] mt-[4rem] place-items-center">
        {diceEl}
      </div>
      <button className='bg-[#5035FF]'>
        Roll
      </button>
    </main>
  );
}
