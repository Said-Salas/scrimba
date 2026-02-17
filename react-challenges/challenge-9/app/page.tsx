"use client"

import { Header } from "./components/Header";
import { Status } from "./components/Status";
import { Languages } from "./components/Languages";
import { Word } from "./components/Word";
import { Keyboard } from "./components/Keyboard";
import { NewGame } from "./components/NewGame";
import { useState } from "react";

export default function Home() {
  const [guessedLet, setGuessedLet] = useState<string>('')
  const addLetter = (letter: string) => {
    setGuessedLet(letter) 
  }

  const [btnState, setBtnState]

  return (
    <>
      <Header />
      <Status />
      <Languages />
      <Word guess={guessedLet} match={undefined}/>
      <Keyboard addLetter={(letter: string) => addLetter(letter)} btnState={match}/>
      <NewGame />
    </>
  );
}
