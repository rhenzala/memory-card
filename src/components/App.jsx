import { useState } from 'react'
import Header from './Header'
import Card from './Card'
import '../styles/App.css'

function GameOver({isWin, finalScore, playAgain}) {
  return (
      <div>
          <p>{isWin ? 'Well done!': 'Better luck next time'}</p>
          <p>Your score: {finalScore}</p>
          <button onClick={playAgain}>Play Again</button>
      </div>
  )
}

function App() {
  const initialPokemons = [
    {
        id: 1,
        name: 'bulbasaur',
        isClicked: false
    },
    {
        id: 2,
        name: 'charmander',
        isClicked: false
    },
    {
        id: 3,
        name: 'squirtle',
        isClicked: false
    },
    {
        id: 4,
        name: 'shellder',
        isClicked: false
    },
    {
        id: 5,
        name: 'butterfree',
        isClicked: false
    },
    {
        id: 6,
        name: 'pidgey',
        isClicked: false
    },
    {
        id: 7,
        name: 'staryu',
        isClicked: false
    },
    {
        id: 8,
        name: 'clefairy',
        isClicked: false
    },
  ]
  const [pokemons, setPokemons] = useState(initialPokemons)
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0)
  const [finalScore, setFinalScore] = useState(0)
  
  const [isWin, setIsWin] = useState()
  const [isOver, setIsOver] = useState(false)


  const playAgain = () => {
    window.location.reload()
    console.log(pokemons)
  }
  const handleCardClick = (pokemon) => {
    if (isOver) return
    console.log('pokemon clicked: ', pokemon.name)
    if (!pokemon.isClicked) {
      const newScore = currentScore + 1
      pokemon.isClicked = true
      if (newScore === 8) {
        setFinalScore(newScore)
        setBestScore(Math.max(newScore, bestScore))
        setIsOver(true)
        setIsWin(true)
      } else{
        setCurrentScore(newScore)
        shuffleCards()
      }
    } else {
      setFinalScore(currentScore)
      setBestScore(Math.max(currentScore, bestScore))
      setIsOver(true)
      setIsWin(false)
    }
    console.log(pokemon)
  }
 
  const shuffleCards = () => {
    const shuffled = [...pokemons].sort(() => Math.random() - 0.5)
    setPokemons(shuffled)
  }
  

  return (
    <>
      <Header 
      currentScore={currentScore}
      bestScore={bestScore}
      />
      <Card 
      pokemons={pokemons} 
      handleCardClick={handleCardClick}
      />
      {isOver ? 
            <GameOver 
            isWin={isWin}
            finalScore={finalScore}
            playAgain={playAgain}
            />
      : null}
    </>
  )
}

export default App
