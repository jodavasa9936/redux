import { useSelector } from "react-redux";

function ResultadoPokemon() {
  const buscador = useSelector((state) => state.buscador);

  return (
    <div>
      <h3 className="text-white">Resultado: </h3>
      {buscador.loading && <div className="text-warning">Buscando...</div>}
      {/* si buscador.loading es true, se mostrara el interior del div */}
      {buscador.pokemon.length >= 1 && (
        <div className="text-succes">
          <img src={buscador.pokemon[0].sprites.front_default} alt="Pokemon" />
          <span>{buscador.pokemon[0].name}</span>
        </div>
      )}
      {buscador.error !== '' && <span className="text-danger">{buscador.error}</span>}
    </div>
  );
}

export default ResultadoPokemon;
