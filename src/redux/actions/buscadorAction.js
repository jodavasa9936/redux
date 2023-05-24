

export const FETCH_POKEMON_REQUEST = "FETCH_POKEMON_REQUEST";
export const FETCH_POKEMON_SUCCES = "FETCH_POKEMON_SUCCES";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";

//action

export const fetchPokemonRequest = () => {
  return {
    type: FETCH_POKEMON_REQUEST,
  };
};
export const fetchPokemonSucces = (Pokemon) => {
  return {
    type: FETCH_POKEMON_SUCCES,
    payload: Pokemon,
  };
};
export const fetchPokemonFailure = (error) => {
  return {
    type: FETCH_POKEMON_FAILURE,
    payload: error,
  };
};
export const fetchPokemon = (valor) => {
  return (dispatch) => {
    dispatch(fetchPokemonRequest());
    fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se encontró el pokemon");
        }
        return response.json(); // Llama a response.json() para obtener los datos JSON
      })
      .then((data) => {
        dispatch(fetchPokemonSucces([data]));
      })
      .catch((error) => {
        dispatch(fetchPokemonFailure("No se encontró el pokemon"));
      });
  };
};

