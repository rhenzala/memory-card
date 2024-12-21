import { useState, useEffect } from "react";

function CreateCard({pokemon, handleCardClick}) {
    const [imgUrl, setImgUrl] = useState(null);

    useEffect(() => {
        let isMounted = true;
        async function searchPokemon(pokemon) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`, {mode: 'cors'});
            const data = await response.json();
            if(isMounted) setImgUrl(data.sprites.front_default)
        }
        searchPokemon(pokemon)
        return () => {
            isMounted = false
        }
    }, []);
    
    return (
        <div 
        className="card flex flex-col gap-2 items-center rounded-xl border-blue border-4 border-solid hover:cursor-pointer hover:-translate-y-2" 
        onClick={() => handleCardClick(pokemon)}
        >
            <img
            className="w-40 h-40 " 
            src={imgUrl} 
            alt={pokemon.name}/>
            <div className="bg-blue w-full py-2 text-center">
                <p className="text-white capitalize text-lg">{pokemon.name}</p>
            </div>
        </div>
    )
}

export default function Card({isStarted, onStart, pokemons, handleCardClick}) {
    
    return (
        <div className="p-6 grid">
            {isStarted ?
            <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
                {pokemons.map(pokemon => 
                <CreateCard
                key={pokemon.id} 
                pokemon={pokemon}
                handleCardClick={handleCardClick}
                />
                )} 
            </div>
            : <button
            className="capitalize p-3 bg-yellow border-blue border-2 border-solid text-blue text-lg justify-self-center"
            onClick={onStart}
            aria-label="Start game"
            >
                start game
            </button>
            }
        </div>
    )
}