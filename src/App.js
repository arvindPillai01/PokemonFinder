import {Heading} from './components/Heading';
import './App.css';
import Main from './components/main';
import './components/mainstyle.css';
import videobg from './img/livewallPokemon.mp4'


function App() {

  //destrucutirng the array
  // const[pokemon, setPokemon] = useState(["bulbasaur", "charmander"])
  //the two above names are default
  // setpokemon will set the values

    return (
      <div className='backdrop'>
        <video src={videobg} autoPlay loop muted className='video-bg' type='video/mp4' />
        <div className="pokemonFinder">
          <Heading />
          <div>
            <Main/>
          </div>
          <div className="background-cover"></div>
        </div>
      </div>
    );
  }

export default App