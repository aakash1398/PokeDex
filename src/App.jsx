import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PokeModal from './PokeModal';
import './style.css';
import pokeball from './pokeball.png';
import Pokemons from './Pokemons';


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
    
  }

  const getPokeMonObj = (results) => {

    results.map(async (pokemon) => {

      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)

      // console.log(res.data)

      setAllPokemon((prevList) => [...prevList, res.data])
      
    })

    
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
      {/* <SearchBar setFilter={setAllPokemon} pokemon={allPokemon} /> */}
      {loading ? 
      <div className="loader">
      </div> : 
      
      <>
      
      <Pokemons pokeData={allPokemon} loading={loading} showModal={showModal}  infoPoke={setPokeInfo} />


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
      </>
      }

      {modalShown && <PokeModal key={pokeInfo.id} Info={pokeInfo} hideModal={hideModal} />}
      
      
    </div>
  )
}
