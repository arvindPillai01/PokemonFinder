import { Heading } from './components/Heading';
import './App.css';
import Main from './components/main';
import './components/mainstyle.css';


function App() {

  //destrucutirng the array
  // const[pokemon, setPokemon] = useState(["bulbasaur", "charmander"])
  //the two above names are default
  // setpokemon will set the values

    return (
      <div className='pokemonFinder'>
        <Heading />
        <div>
          <Main/>
        </div>
      </div>
    );
  }

export default App