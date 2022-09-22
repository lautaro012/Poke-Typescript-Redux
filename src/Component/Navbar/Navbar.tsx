import { NavbarProp } from "../../Interfaces/interfaces"
import Searchbar from "../Searchbar/Searchbar"
import './Navbar.css'

export default function Navbar ({setPokemon, setEditPokemon}: NavbarProp ) {

    const handleClick = (e:any) => {
        e.preventDefault()
        setPokemon(true)
        setEditPokemon(false);
    }
    return (
        <div className="Navbar-conteiner">
            <div className="searchbar-conteiner">
                <span> Listado de Pokemon: </span>
                <Searchbar/>
            </div>
            <div>
                <button data-testid='newpokemon-button' className="button-36" onClick={handleClick}> + Nuevo </button>
            </div>
        </div>
    )
}