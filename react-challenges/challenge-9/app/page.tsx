"use client"

import { Header } from "./components/Header";
import { Status } from "./components/Status";
import { Languages } from "./components/Languages";
import { Word } from "./components/Word";
import { Keyboard } from "./components/Keyboard";
import { NewGame } from "./components/NewGame";
import { useState } from "react";

export default function Home() {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const addLetter = (letter: string) => {
    setGuessedLetters(prevGL => [...prevGL, letter]) 
  }
  console.log(guessedLetters)

  return (
    <>
      <Header />
      <Status />
      <Languages />
      <Word />
      <Keyboard addLetter={(letter: string) => addLetter(letter)}/>
      <NewGame />
    </>
  );
}
