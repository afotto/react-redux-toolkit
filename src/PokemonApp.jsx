import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {

  // En el useSelector va el nombre del state en el store
  // y desestructuro los atributos del state que deseo
  const { isLoading, page, pokemons =[]  } = useSelector( state => state.pokemons );
  const dispatch = useDispatch();

  //Si quiero usuar algo 1ra vez y solo la 1ra => useEffect()
  useEffect(() => {
      dispatch( getPokemons() );
  }, []);
  
  return (
    <>
        <h1>ProkemonApp</h1>
        <hr />
        <span>Loding: { isLoading ? 'true' : 'false' }</span>

        <ul>
            {pokemons.map( pokemon => (
              <li key={pokemon.name} > {pokemon.name}  </li>
            ))}
        </ul>

        <button
          disabled={isLoading}
          onClick={() => dispatch(getPokemons(page))}
        >
          Next
        </button>
    </>
  )
}
