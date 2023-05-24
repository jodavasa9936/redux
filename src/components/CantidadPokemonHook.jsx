import { useSelector } from "react-redux"

export function CantidadPokemonHook() {

  const game_shop = useSelector((state)=>state.game_shop)

  return (
    <div>Unidades: {game_shop.pokemon}</div>
)
}

