import './List.css'
import { getPokemon} from '../../redux/actions';
import {useAppDispatch} from '../../config'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Pokemones from '../Pokemones/Pokemones';
import { Pokemon, Pokestate } from '../../Interfaces/interfaces';

export default function List ({onPokemonEdit}:any) {

    let dispatch = useAppDispatch()
    let pokemons = useSelector((state:Pokestate) => state.pokemons);
    useEffect(() => {
        dispatch(getPokemon())
    },[dispatch])
    
    return(
        <div className='list-conteiner'>
            <table>
                    <thead>
                        <tr>
                            <td> <b>Nombre</b> </td>
                            <td> <b>Imagen</b> </td>
                            <td> <b>Ataque</b> </td>
                            <td> <b>Defensa</b> </td>
                            <td> <b>Acciones</b> </td>
                        </tr>
                    </thead>
                    <tbody>
                {
                    pokemons?.map((poke:Pokemon) => {
                        return (
                                <Pokemones
                                key={poke._id}
                                poke={poke}
                                onPokemonEdit={onPokemonEdit}
                                />
                                )
                            })
                        }
                    </tbody>
            </table>
        </div>
    )
}