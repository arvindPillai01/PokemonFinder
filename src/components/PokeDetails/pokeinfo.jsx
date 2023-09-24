import React from "react";
import './pokeinfo.css';

const Overlay = ({ pokemon, onClose }) =>{
    if (!pokemon) return null;
  
  return (
    <div>
        <div className="overlay">
            <div className="overlay-content">
                <div className="overlay-header"></div>
                    <h1>{pokemon.Name}</h1>
                    <button onClick={onClose} className="close-button">
                    Close
                    </button>
                </div>
                <div className="overlay-body">
                    <img src={pokemon.sprites.other["official-artwork"].front_default}></img>
                    <div className="abilities">
                        <div className="group">
                            <h2>bla</h2>
                        </div>
                        <div className="group">
                            <h2>bla</h2>
                        </div>
                    </div>  
                    <div className="basestat">
                        <h3>hp</h3>
                        <h3>hp</h3>
                        <h3>hp</h3>
                </div> 
            </div>
        </div>
    </div>
    
  )
}
export { Overlay as default }; // Named export with alias 'default'