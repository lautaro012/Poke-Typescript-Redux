import {useState} from 'react';
import NavBar from './Component/Navbar/Navbar';
import List from './Component/List/List';
import Form from './Component/Form/Form';
import './App.css';
import { Pokemon } from './Interfaces/interfaces';

function App() {
  const [createPokemon, setCreatePokemon] = useState<Boolean>(false)
  const [editPokemon, setEditPokemon] = useState<Boolean>(false)
  const [formData, setFormData] = useState<Pokemon>({
    id: 0,
    name: 'name',
    image: 'image',
    attack: 50,
    defense: 50,
    hp: 0,
    type: 'earth',
    idAuthor: 1
  })

  const onPokemonEdit = (poke:Pokemon) => {
    setEditPokemon(true);
    setCreatePokemon(false)
    setFormData(poke)
  }

  return (
    <div className='App'>
      <NavBar setPokemon={setCreatePokemon} setEditPokemon={setEditPokemon} />
      <List onPokemonEdit={onPokemonEdit}></List>
      {editPokemon ? <Form newPokemon={false} setPokemon={setCreatePokemon} formData={formData} setEditPokemon={setEditPokemon} /> : null}
      {createPokemon ? <Form newPokemon={true} setPokemon={setCreatePokemon} formData={formData} setEditPokemon={setEditPokemon} /> : null}

    </div>
  );
}

export default App;
