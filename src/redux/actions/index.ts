import { Dispatch } from "react";
import axios from 'axios';
import { NewPokemon, Pokemon } from "../../Interfaces/interfaces";

export const ADD_POKEMON = 'ADD_POKEMON'
export const GET_PKM = 'GET_PKM'
export const SEARCH_PKM_BY_NAME = 'SEARCH_PKM_BY_NAME'
export const PKM_REMOVED = 'PKM_REMOVED'
export const EDIT_PKM = 'EDIT_PKM'

type Action = {
    type: string;
    payload?: any;
};

export const getPokemon = function (data?:string)  {
    if(!data) {
        return function(dispatch:Dispatch<Action>){
            axios('https://bp-pokemons.herokuapp.com/?idAuthor=1')
            .then(resp => {
                dispatch({
                    type: GET_PKM,
                    payload: resp.data
                })
            })
            .catch(err => console.log(err))
        }
    }
    // if(typeof data === 'number') {
    //     return function(dispatch:Dispatch<Action>){
    //         fetch(`https://bp-pokemons.herokuapp.com/${data}`)
    //         .then(resp => resp.json())
    //         .then(res => {
    //             dispatch({
    //                 type: 'SEARCH_PKM_BY_ID',
    //                 payload: res
    //             })
    //         })
    //         .catch(err => console.log(err))
    //     }
    // }

    return function(dispatch:Dispatch<Action>){
        dispatch({
            type: SEARCH_PKM_BY_NAME,
            payload: data.charAt(0).toUpperCase() + data.slice(1).toLocaleLowerCase()
        })
    }

}

export const createPokemon = (input:NewPokemon) => {
    return function (dispatch:Dispatch<Action>) {
        axios.post('https://bp-pokemons.herokuapp.com/?idAuthor=1', input)
        .then(resp => {
            dispatch({
                type: ADD_POKEMON,
                payload: resp.data
            })
        })
        .catch(err => console.log('error', err))
    }
}

export const deletePokemon = (id:number) => {
    return function (dispatch:Dispatch<Action>) {
        axios.delete(`https://bp-pokemons.herokuapp.com/${id}`)
        .then(resp => {
            dispatch({
                type: PKM_REMOVED,
                payload: id
            })
            console.log(resp.data)
        })
        .catch(error=> console.log('error al borrar', error))
    }
}

export const editPokemon = (input:NewPokemon, id?:number) => {
    return function (dispatch:Dispatch<Action>) {
        axios.put(`https://bp-pokemons.herokuapp.com/${id}`, input)
        .then(resp => {
            console.log('Modificado correctamente', resp.data)
        })
        .catch(err => console.log(err))
    }
}