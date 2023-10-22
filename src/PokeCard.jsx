import React from "react";
import "./style.css";

export default function PokeCard({pokeData,infoPoke, showModal }) {


  return (
            <div>
              <div className={`${pokeData.types[0].type.name} card`} onClick={() => {infoPoke(pokeData); showModal()}} >
                  <span className="number">{`# ${pokeData.id}`}</span>
                  <img
                  src={pokeData.sprites.other.dream_world.front_default}
                  alt="pokeData-img"
                  className="pokeDataImg"
                />
                  <div className="details">
                    {/* <span className="id">{pokeData.id}</span> */}
                    <span className="name">{pokeData.name}</span>
                    <span className="type">Type : {pokeData.types[0].type.name}</span>
                  </div>
                </div>

                {/* <BarChart /> */}

            </div>
  );
}
