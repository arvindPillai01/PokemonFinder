import { memo } from 'react';
import ReactDOM from 'react-dom';
import './Overlay.css';
import { PokeDetails } from '../PokeDetails/pokeinfo';

function Overlay( { onClick, hidden } ) {

	return ReactDOM.createPortal(
		<>
			<Overlay hidden={ isHidden } onClick={ closeModal } />

			<div className={ `details-view-container ${ isHidden && 'hidden' }` } onAnimationEnd={ handleAnimationEnd }>
				<PokeDetails pokemon={ currentPokemon } />
			</div>
		</>, document.body,
	);
}

// export default memo( Overlay );
