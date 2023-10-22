import React from "react";
import { Close } from "@mui/icons-material";
export default function PokeModal({Info, hideModal}) {


  return (
    <>
        {Info ? 
        <div className="backdrop" >
  
            <div className="modalContainer" key={Info.id}>
                <Close fontSize="large" className="close-icon" onClick={hideModal} />
                <div className="modalWrapper">
                    <div className="left">
                        <span className="modal-number">{`# ${Info.id}`}</span>
                        <img
                        src={Info.sprites.other.dream_world.front_default}
                        alt="modal-img"
                        className="modal-img"
                        />
                        <span className="modal-name">{Info.name}</span>
                    </div>
                    <hr className="hr"></hr>
                    <div className="stats">
                    
                        <h2 className="statsTitle">Abilities</h2>
                        <div className="abilitiesTag">
                        
                            {Info.abilities.map((ability) => {
                                return(
                                    <>
                                        <div className="modal-ability">
                                            <span className="abilityTag">{ability.ability.name}</span>
                                        </div>
                                    </>
                                );
                            })}

                        </div>

                        <div className="statsTag">
                            {Info.stats.map((item) => {
                                return(
                                    <>
                                        <div className="stat-ability">
                                            <span className="statTag">{item.stat.name}</span>
                                            <span className="statTag">{item.base_stat}</span>
                                            
                                        </div>
                                    </>
                                );
                            })}

                        </div>
                        
                    </div>

                </div>
                
                
            </div>
        </div>
            
        : ''};
    </>

  )};


