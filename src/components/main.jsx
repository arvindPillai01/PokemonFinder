import React, { useEffect, useState } from "react";
import Card from './Cards/card';
import SearchBar from "./Searchbar/searchbar";

const Main=()=>{

    const [pokeData, setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl] =useState();
    //search result
    const [searchResults, setSearchResults] = useState([]);

    //function of fetching pokemon via api

    const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          //console.log(data.results);

          setNextUrl(data.next);
          setPrevUrl(data.previous);
        //   const pokemonUrls = await getPokemon(data.results)
        //   console.log(pokemonUrls)
          getPokemon(data.results)
          setLoading(false);
          //console.log(pokeData)


        } catch (error) {
          console.error('Error fetching data:', error);
        }
        setLoading(false);
      };


      //function to get pokemon
    //   const getPokemon = async(response)=>{
    //     response.map(async(item)=>{
    //         const resultResponse = await fetch(item.url);
    //         //item.url will only return a array of urls we need an array of arrays
    //         const results = await resultResponse.json().url;
    //         console.log(results);
    //     })
    //   }
    const getPokemon = async (results) => {
        try {
          const pokemonDataArray = await Promise.all(results.map(async (item) => {
            const response = await fetch(item.url);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const pokemonData = await response.json();
            return pokemonData;
          }));
          //console.log('Pokemon Data:', pokemonDataArray);
    
          setPokeData(prevState => [...prevState, ...pokemonDataArray]);

        } 
        
        catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    const handleSearch = async (query) => {
      // Perform search based on the query
      if (query.trim() === '') {
        setSearchResults([]);
        return;
      }


      const searchUrl = `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`;
        setLoading(true);
        try {
          const response = await fetch(searchUrl);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setSearchResults([data]);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
    };
  
    useEffect(() => {
      const fetchDataAndHandleWarning = async () => {
        await fetchData();
      };
      fetchDataAndHandleWarning();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);
    
    //runs whenever the application renders
    //if we run empty array runs when the page is laoded, when value changes the page is reloaded

    return(
      <div>
      <SearchBar onSearch={handleSearch} />
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          
          <Card pokemon={searchResults.length > 0 ? searchResults : pokeData} loading={loading} />
        )}
        {/* <Card pokemon={pokeData} loading={loading} /> */}
        <div className="btn-group">
          <button className={`buttonControl ${prevUrl ? '' : 'disabled'}`} onClick={()=>{setPokeData([])
                            setUrl(prevUrl)}} >Previous</button>

          <button className={`buttonControl ${nextUrl ? '' : 'disabled'}`} onClick={()=>{setPokeData([])
              setUrl(nextUrl)}} >Next</button>
        </div>
      </div>
    </div>
    )
}

export default Main;