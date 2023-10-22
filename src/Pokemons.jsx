import React from 'react'
import PokeCard from './PokeCard'

export default function Pokemons({pokeData, loading, showModal, infoPoke}) {
    const sortedPoke = pokeData.slice().sort((a,b) => a.id - b.id)

    return (<div className='pokeListWrapper'>
        {sortedPoke.map(pokemon => <PokeCard key={pokemon.id} pokeData={pokemon} loading={loading} showModal={showModal} infoPoke={poke => {infoPoke(poke)}} />)}
    </div>
        )

}

