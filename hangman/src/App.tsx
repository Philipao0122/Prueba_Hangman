import { useCallback, useEffect, useState } from "react"
import words from "./word_list.json"
import { HangmanDrawing } from "./HangmanDrawing"
import { HangmanWord } from "./HangmanWord"
import { Keyboard } from "./keyboard"

function App()
{
  const[wordToGuess,setWordToGuess] = useState (() => {
    return words[Math.floor(Math.random()*words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  return (
    <div
    style={{
      maxWidth: "800px",
      
      display: "flex",
      flexDirection:"column",
      gap: "2rem",
      margin: "0 auto",
      alignItems :"center",

     }}
    >
     <div style ={{ fontSize: "2rem",textAlign: "center"}}>Lose win</div> 
     <HangmanDrawing />
     <HangmanWord />
     <Keyboard />
    </div>


  )
}

export default App