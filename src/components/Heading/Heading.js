import './Heading.css';
import Pokelogo from '../../img/pokemon_logo.png';

import React from 'react';
import Lottie from 'react-lottie';
import pokelogoAnimation from '../../img/pokeball_animation.json'; // Adjust the path


export default function Heading() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: pokelogoAnimation,
	  };
	return (
    <div className="heading-container"id="html">
      <div className="pokelogo-container">
        <img src={Pokelogo} alt="Pokemon Logo" className="pokelogo" />
      </div>
	  	<div className="lottie-animation">
			<Lottie options={defaultOptions} height={100} width={100} />
		</div>
	</div>
	);
}
