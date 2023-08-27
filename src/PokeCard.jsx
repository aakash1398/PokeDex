import React from "react";
import "./style.css";

export default function PokeCard({pokeData, loading, infoPoke, showModal }) {


  return (
  <>
      {loading ? <img src='shorturl.at/gitu9' alt="loading.." className="loading-gif" /> : 


            <div>
              <div className={`${pokeData.types[0].type.name} card`} onClick={() => {infoPoke(pokeData); showModal()}} >
                  {/* <span className="number">{`# ${pokeData.id}`}</span> */}
                  <img
                  src={pokeData.sprites.other.dream_world.front_default}
                  alt="pokeData-img"
                  className="pokeDataImg"
                />
                  <div className="details">
                    <span className="name">{pokeData.name}</span>
                    <span className="type">Type : {pokeData.types[0].type.name}</span>
                  </div>
                </div>

            </div>




                
      
      }


  </>
          
  );
}
