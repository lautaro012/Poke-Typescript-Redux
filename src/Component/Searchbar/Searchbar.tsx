import { useState, ChangeEvent, MouseEvent } from "react"
import { useAppDispatch } from "../../config"
import { getPokemon } from "../../redux/actions"
import lupa from '../../styles/images/lupa.png'

export default function Searchbar () {
    const [searchPokemon, setSearchPokemon] = useState<string>('')
    let dispatch = useAppDispatch()
   
   const handleChange = function (e:ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        setSearchPokemon(e.target.value)
   }
   
   const handleSearch = function (e:MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        dispatch(getPokemon(searchPokemon))
   }
    return (
        <form>
            <button onClick={e => handleSearch(e)} > <img src={lupa} width={15} alt='lupa'></img> </button>
            <input onChange={e => handleChange(e)} type='text' placeholder="Search Pokemon.."></input>
        </form>
    )
}