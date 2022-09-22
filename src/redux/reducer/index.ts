import { Pokestate } from "../../Interfaces/interfaces";
import { 
    ADD_POKEMON, 
    GET_PKM, 
    PKM_REMOVED, 
    SEARCH_PKM_BY_NAME 
} from "../actions";



const initialState:Pokestate = {
  pokemons: [],
  backup: []
}


export default function rootReducer(state = initialState, action:any) {
    switch(action.type){

        case GET_PKM:
        return {
            ...state,
            pokemons:[...action.payload],
            backup:[...action.payload],
        }

        // case 'SEARCH_PKM_BY_ID':
        // return {
        //     ...state,
        //     pokemons: action.payload
        // }

        case SEARCH_PKM_BY_NAME:
            let data = action.payload
            let result = state.backup.filter(poke => poke.name === data ) 
        return {
            ...state,
            pokemons: result
        }

        case PKM_REMOVED:
            let deletePokemon = state.pokemons.filter(poke => poke.id !== action.payload)
        return {
            ...state,
            pokemons: deletePokemon
        }

        case ADD_POKEMON:
        return {
            ...state,
            pokemons: [...state.pokemons, action.payload]
        }

		default:
			return state;
	}
}