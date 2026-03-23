"use client"

import { Header } from "./components/Header";
import { Status } from "./components/Status";
import { Languages } from "./components/Languages";
import { Word } from "./components/Word";
import { Keyboard } from "./components/Keyboard";
import { NewGame } from "./components/NewGame";
import { useState, useEffect } from "react";
import { languages } from "@/languages"

export default function Home() {
  const [word, setWord] = useState('react')
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const wrongGuessesCount = guessedLetters.filter(letter => ![...word].includes(letter)).length
  const rightGuessCount = guessedLetters.filter(letter => [...word].includes(letter)).length
  const [gotNewErrors, setGotNewErrors] = useState<boolean | null>(null)
  const isGameLost = wrongGuessesCount >= languages.length - 1 ? true : false
  const isGameWon = [...word].every(letter => guessedLetters.includes(letter))
  const isGameOver = isGameLost || isGameWon

  useEffect(() => {
    if (wrongGuessesCount > 0) setGotNewErrors(true)
  }, [wrongGuessesCount])

  useEffect(() => {
    if (rightGuessCount > 0) setGotNewErrors(false)
  }, [rightGuessCount])
  
  return (
    <>
      <Header />
      <Status isGameWon={isGameWon} isGameLost={isGameLost} wrongGuessesCount={wrongGuessesCount} languages={languages} gotNewErrors={gotNewErrors}/>
      <Languages wrongGuessesCount={wrongGuessesCount} languages={languages}/>
      <Word word={word} guessedLetters={guessedLetters}/>
      <Keyboard word={word} guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters} isGameOver={isGameOver}/>
      <NewGame isGameOver={isGameOver}/>
    </>
  );
}
