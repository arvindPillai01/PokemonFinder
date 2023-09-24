import React, { Component ,useState } from 'react';
import './card.css';
import Overlay from '../PokeDetails/pokeinfo'; 



export default function Card({ pokemon, loading}) {

	const [selectedPokemon, setSelectedPokemon] = useState(null);

	const handleCardClick = (pokemon) => {
	  setSelectedPokemon(pokemon);
	};
  
	const handleCloseOverlay = () => {
	  setSelectedPokemon(null);
	};


	console.log(pokemon);
	return (
		<div className="card-container">
		{loading ? (
		  <h1>Loading...</h1>
		) : (
			<div className="card-wrapper">{
				pokemon.map((item) => (

					<div className={`card ${item.name} type-${item.types[0].type.name}`} key={item.id} onClick={() => handleCardClick(item)}> 
						<div className="bg-pokeball"></div>
						<span className="pokemon-id">{`# ${item.id}`}</span> 
			
						<div className="card-title">
							<h2>{item.name}</h2>
						</div>
			
						<div className="pokemon-image">
							<img alt={item.name} src={item.sprites.other["official-artwork"].front_default} />
						</div>
					
					</div>
				))}
			</div>
		  )}
		  <Overlay pokemon={selectedPokemon} onClose={handleCloseOverlay} />
	  </div>
	);
  }
  
  
  
