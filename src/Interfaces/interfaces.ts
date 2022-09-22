import { Dispatch, SetStateAction } from "react";

export interface FormProps {
    setPokemon: Dispatch<SetStateAction<Boolean>>;
    setEditPokemon: Dispatch<SetStateAction<Boolean>>;
    formData: Pokemon;
    newPokemon?: Boolean
  }

export interface Pokestate {
  pokemons: Pokemon[];
  backup: Pokemon[]
}

export interface NavbarProp {
  setPokemon: Dispatch<SetStateAction<Boolean>>;
  setEditPokemon: Dispatch<SetStateAction<Boolean>>;
}

export interface NewPokemon {
  name: string,
  image: string,
  attack: number,
  defense: number,
  hp: number,
  type: string,
  idAuthor: number
}

export interface Pokemon extends NewPokemon {
  id: number,
}

export interface Poke {
  poke:Pokemon
  onPokemonEdit:(poke:Pokemon) => void
}