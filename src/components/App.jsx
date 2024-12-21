import { useState } from 'react'
import Header from './Header'
import Card from './Card'
import '../styles/App.css'

function GameOver({isWin, finalScore, playAgain}) {
  return (
      <dialog className='z-50 top-[10%] left-[20%] right-[20%] bg-white border-black border-2 border-solid px-6 py-8 h-[300px] flex flex-col items-center justify-between custom-sm:left-[10%] custom-sm:right-[10%]'>
          <p className='text-3xl'>{isWin ? 'Well done!': 'Better luck next time'}</p>
          <p className='text-xl'>Your score: {finalScore}</p>
          <button
          className='bg-yellow border-blue border-2 border-solid text-center text-blue p-3 font-medium' 
          onClick={playAgain}
          >
            Play Again
          </button>
      </dialog>
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
    {
      id: 9,
      name: 'caterpie',
      isClicked: false
    },
    {
      id: 10,
      name: 'omastar',
      isClicked: false
    },
  ]
  const [pokemons, setPokemons] = useState(initialPokemons)
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0)
  const [finalScore, setFinalScore] = useState(0)
  
  const [isWin, setIsWin] = useState()
  const [isOver, setIsOver] = useState(false)
  const [startIndex, setStartIndex] = useState()


  const playAgain = () => {
    setStartIndex(0)
    setIsOver(false)
    setPokemons(initialPokemons)
    setCurrentScore(0)
  
  }
  const handleCardClick = (pokemon) => {
    if (isOver) return
    console.log('pokemon clicked: ', pokemon.name)
    if (!pokemon.isClicked) {
      const newScore = currentScore + 1
      pokemon.isClicked = true
      if (newScore === pokemons.length) {
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
    <div>
      <Header 
      currentScore={currentScore}
      bestScore={bestScore}
      />
      <Card 
      isStarted={startIndex === 0}
      onStart={() => setStartIndex(0)}
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
    </div>
  )
}

export default App
