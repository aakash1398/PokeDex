import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PokeCard from './PokeCard';
import PokeModal from './PokeModal';
import './style.css';
import pokeball from './pokeball.png';


export default function App() {

  const [allPokemon, setAllPokemon] = useState([]);
  // const [pokemonDetails, setPokemonDetails] = useState([])
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [prevUrl, setPrevUrl] = useState();
  const [nextUrl, setNextUrl] = useState();
  const [loading, setLoading] = useState(true)
  const [pokeInfo, setPokeInfo] = useState();
  const [modalShown, setModalShown] = useState(false)

  // const controller = new AbortController()

  let cancel;

  const getPokeMonList = async () =>{

    setLoading(true)

    const res = await axios.get(url,{cancelToken : new axios.CancelToken(c => cancel = c)})

    setNextUrl(res.data.next)
    setPrevUrl(res.data.previous)
    getPokeMonObj(res.data.results)
    setLoading(false)
    sortPokemon()
    
  }

  const getPokeMonObj = (results) => {

    results.map(async (pokemon) => {

      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)

      console.log(res.data)

      setAllPokemon((prevList) => [...prevList, res.data])
      
    })

    
  }


  const sortPokemon = async () => {
    const res = allPokemon

    setAllPokemon(res.sort((a,b) => a.id > b.id))

  }


 useEffect(() =>{
  // console.log('effect runs')

  getPokeMonList()

  return () => cancel()

 },[url])


 const showModal = () =>{
  setModalShown(true)
 }

 const hideModal = (e) => {
  e.preventDefault()
  setModalShown(false)
 }

  
  return (
    

    <div className='container'>
      <div className="pokedexContainer">
        <img src={pokeball} alt='pokeball' className='pokeBall' />
        <h1>PokeDex</h1>
      </div>
      <hr className='contHr' />
      <div className="pokeListWrapper">
        {
        allPokemon.map((pokemon) => {
          return <PokeCard key={pokemon.id} pokeData={pokemon} loading={loading} showModal={showModal} infoPoke={poke => {setPokeInfo(poke)}} /> 
        })}
      </div>

      <div className="buttons">

        {prevUrl && <button className='btn' onClick={() => {
          setUrl(prevUrl)
          setAllPokemon([])
          }}>Previous</button>}
        <button className='btn' onClick={() => {
          setUrl(nextUrl)
          setAllPokemon([])
          }}>Next</button>

      </div>

      {modalShown && <PokeModal key={pokeInfo.id} Info={pokeInfo} hideModal={hideModal} />}
      
      
    </div>
  )
}
