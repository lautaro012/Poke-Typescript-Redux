import { deletePokemon } from '../../redux/actions/index'
import { useAppDispatch } from '../../config'
import { Poke } from '../../Interfaces/interfaces'
import editpencil from '../../styles/images/editpencil.png'
import trashcan from '../../styles/images/trashcan.png'



export default function Pokemones ({poke, onPokemonEdit}:Poke) {

    let dispatch = useAppDispatch()

    const handleDelete = () => {
        dispatch(deletePokemon(poke.id))
    }
    const handleEdit = () => {
        onPokemonEdit(poke)
    }
    return (
                <tr key={poke.id} className='pokemon_tdst'>
                    <td>{poke.name}</td>
                    <td><img data-testid='test-image' width={50} src={`${poke.image}`} alt='poke_image'></img></td>
                    <td>{poke.attack}</td>
                    <td>{poke.defense}</td>
                    <td>
                        <button value={poke.id} onClick={handleEdit}> <img width={15} src={editpencil} alt='editpencil' ></img> </button>
                        <button data-testid='deletebutton' value={poke.id} onClick={handleDelete}> <img width={15} src={trashcan} alt='trashcan'></img> </button>
                    </td>
                </tr>
    )
}