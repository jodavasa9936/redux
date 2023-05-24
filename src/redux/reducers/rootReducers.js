import { combineReducers } from "redux";
import { game_shop } from "./gameShopReducer.js";
import { buscador } from "./buscadorReducer.js";

export const rootReducers = combineReducers({
  game_shop,
  buscador
});

