'use client'
import { nanoid } from 'nanoid'
import { useState } from 'react'

export const Word = ({guess, match}: {guess: string, match: boolean | undefined}) => {
    const [word, setWord] = useState('react')
    match = [...word].includes(guess) ? true : false
    
    const letters = [...word].map(letter => (
        <span key={nanoid()} className='text-[#F9F4DA] bg-[#323232] w-[3.5rem] h-[3.5rem] border-b-2 border-[#F9F4DA]
            font-bold flex justify-center items-center text-[1.75rem]'
        >
            {letter.toUpperCase()}
        </span>
    ))

    return (
        <section className='flex gap-0.75 mt-[2rem]'>
            {letters}
        </section>
    )
}