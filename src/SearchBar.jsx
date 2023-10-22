import React, { useState } from 'react'

export default function SearchBar({pokemon, setFilter}) {
    const [text, setText] = useState('')

    const handleChange = (e) =>{
        setText(e.target.value)
        // console.log(text)
        const filterArr = pokemon.filter(el => el.name===text)
        console.log(filterArr)
        // setFilter(filterArr)
    }
  return (
    <div>
        <input className='search-box' type='text' placeholder='Search using pokemon name, type, etc' value={text} onChange={(e) => handleChange(e)} />
    </div>
  )
}
