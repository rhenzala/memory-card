import { useState } from 'react'
import Header from './Header'
import '../styles/App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  const [pokemons, setPokemons] = useState([
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
  ])
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0)
  
  const handleCardClick = (pokemon) => {
    console.log('pokemon clicked: ', pokemon.name)
    if (!pokemon.isClicked) {
      pokemon.isClicked = true
      shuffleCards();
      setCurrentScore(currentScore => currentScore += 1)
    } else if (pokemon.isClicked) {
      setBestScore(bestScore => bestScore += currentScore)
      setCurrentScore(0)
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
      handleCardClick={handleCardClick}/>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
