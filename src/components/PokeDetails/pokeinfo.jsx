import React from "react";
import './pokeinfo.css';

const Overlay = ({ pokemon, onClose }) =>{
    if (!pokemon) return null;
  
  return (
    <div>
        <div className="overlay">
            <div className={`overlay-content type-${pokemon.types[0].type.name}`}>
                <div className="overlay-header">
                        <button onClick={onClose} className="close-button">
                        X
                        </button>
                </div>
                <div className="overlay-body">
                    
                    <img src={pokemon.sprites.other.dream_world.front_default} alt="pokemon"></img>
                    <h1>{pokemon.name}</h1>
                    <div className="info">
                        <table>
                            <tr>
                                <th>
                                    <h2>Abilities</h2>
                                </th>
                                <td>
                                    <h3>
                                        {pokemon.abilities[0].ability.name}
                                        {pokemon.abilities[1] && `, ${pokemon.abilities[1].ability.name}`}
                                    </h3>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h2>Height</h2>
                                </th>
                                <td>
                                    <h3>{pokemon.height}</h3>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h2>Weight</h2>
                                </th>
                                <td>
                                    <h3>{pokemon.weight}</h3>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h2>Species</h2>
                                </th>
                                <td>
                                    <h3>{pokemon.species.name}</h3>
                                </td>
                            </tr>
                        </table>
                    </div>  


                </div>
            </div>
        </div>
    </div>
    
  )
}
export { Overlay as default }; // Named export with alias 'default'