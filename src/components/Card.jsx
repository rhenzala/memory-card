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
        <div className="card flex flex-col gap-2" onClick={() => handleCardClick(pokemon)}>
            <img src={imgUrl} alt={pokemon.name}/>
            <p>{pokemon.name}</p>
        </div>
    )
}

export default function Card({isStarted, onStart, pokemons, handleCardClick}) {
    
    return (
        <div>
            {isStarted ?
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {pokemons.map(pokemon => 
                <CreateCard
                key={pokemon.id} 
                pokemon={pokemon}
                handleCardClick={handleCardClick}
                />
                )} 
            </div>
            : <button
            className="capitalize"
            onClick={onStart}
            >
                start game
            </button>
            }
        </div>
    )
}