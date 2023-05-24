import { connect } from "react-redux";
import {
  buy_pokemon_action,
  return_pokemon_action,
} from "../redux/actions/gameShopAction";

function CompraPokemon(mapDispatchToProps) {
  return (
    <div>
      <button
        className="btn btn-dark btn-sm mb-2"
        onClick={() => {
          mapDispatchToProps.buy_pokemon_action(1);
        }}
      >
        Comprar Pokemon
      </button>
      <button
        className="btn btn-dark btn-sm"
        onClick={() => {
          mapDispatchToProps.return_pokemon_action(1);
        }}
      >
        Regresar Pokemon
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    buy_pokemon_action: (amount) => dispatch(buy_pokemon_action(amount)),
    return_pokemon_action: (amount) => dispatch(return_pokemon_action(amount))
  };
};

export default connect(null, mapDispatchToProps)(CompraPokemon);
/* como en este componente nada relacionado con el estado lo dejamos null */
