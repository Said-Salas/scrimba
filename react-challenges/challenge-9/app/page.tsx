"use client"

import { Header } from "./components/Header";
import { Status } from "./components/Status";
import { Languages } from "./components/Languages";
import { Word } from "./components/Word";
import { Keyboard } from "./components/Keyboard";
import { NewGame } from "./components/NewGame";
import { useState} from "react";

export default function Home() {
  const [word, setWord] = useState('react')
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const wrongGuessesCount = guessedLetters.filter(letter => ![...word].includes(letter)).length
  console.log(wrongGuessesCount)
  
  return (
    <>
      <Header />
      <Status />
      <Languages wrongGuessesCount={wrongGuessesCount}/>
      <Word word={word} guessedLetters={guessedLetters}/>
      <Keyboard word={word} guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters}/>
      <NewGame />
    </>
  );
}
