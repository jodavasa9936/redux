import { connect } from "react-redux";

function CantidadPokemon({ game_shop }) {
  return <div>Unidades: {game_shop.pokemon}</div>;
}

/* hay que convertir el pokemon:30 a props y normalmente se hacen con una constante
que se pone  con un nombre que es en este caso el siguiente...*/
const mapStateToProps = (state) => {
  return {
    game_shop: state.game_shop, // Lee el estado del contador desde el store de Redux
  };
};
/* el dispatch este caso estará dentro de la carpeta comprarpokemon.jsx */

/* export default connect(mapStateToProps, mapDispatchToProps)(CantidadPokemon); */
export default connect(mapStateToProps)(CantidadPokemon);
/* connect internamente ejecuta la funcion mapStateToProps(puede tener cualquier
  nombre pero es asi la forma tradicional DE ESCRIBIRLA) y le pasa
  el state  ESO LO HACE INTERNAMENTE POR EL CONNETC NOSOTROS NO TENEMOS NADA QUE VER 
  CON ESO.*/
/* esto es una funcion currificada, que devuelve una funcion */
