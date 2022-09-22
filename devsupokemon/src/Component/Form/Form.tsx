import { useState, ChangeEvent } from "react";
import { FormProps } from "../../Interfaces/interfaces";
import "./Form.css";
import { NewPokemon } from "../../Interfaces/interfaces";
import { useAppDispatch } from "../../config";
import { createPokemon, editPokemon } from "../../redux/actions";
import disket from "../../styles/images/disket.png";
import x from "../../styles/images/x.png";

export default function Form({
  newPokemon,
  formData,
  setPokemon,
  setEditPokemon,
}: FormProps) {
  let { id, name, image, attack, defense, hp, type } = formData;

  const [input, setInput] = useState<NewPokemon>({
    name: name,
    image: image,
    attack: attack,
    defense: defense,
    hp: hp,
    type: type,
    idAuthor: 1,
  });

  const dispatch = useAppDispatch();

  const handleClose = (e: any) => {
    e.preventDefault();
    setPokemon(false);
    setEditPokemon(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  //Arregla el nombre
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      name:
        e.target.value.charAt(0).toUpperCase() +
        e.target.value.slice(1).toLocaleLowerCase(),
    });
  };

  const handleSubmit = () => {
    if (newPokemon) {
      return dispatch(createPokemon(input));
    }
    dispatch(editPokemon(input, id));
  };

  return (
    <div className="form-conteiner">
      {newPokemon ? (
        <span> Nuevo Pokemon </span>
      ) : (
        <span> Edita a {formData.name} </span>
      )}
      {newPokemon ? (
        <form data-testid="formulario" onSubmit={handleSubmit}>
          <div className="label-conteiner">
            <div>
              <div className="input-label">
                <label>Nombre:</label>
                <input
                  onChange={(e) => handleChangeName(e)}
                  pattern="[a-zA-Z]+"
                  maxLength={15}
                  required
                  name="name"
                  type="text"
                  placeholder="Insert name"
                  title="El nombre del Pokemon debe ser 1 sola palabra y no debe contener caracteres especiales"
                ></input>
              </div>
              <div className="input-label">
                <label> Imagen: </label>
                <input
                  onChange={(e) => handleChange(e)}
                  required
                  name="image"
                  type="url"
                  placeholder="url"
                ></input>
              </div>
            </div>

            <div>
              <div className="input-label">
                <label> Ataque: </label>
                <span>0</span>
                <input
                  onChange={(e) => handleChange(e)}
                  name="attack"
                  className="input-range"
                  type="range"
                  min="0"
                  max="100"
                />
                <span>100</span>
              </div>
              <div className="input-label">
                <label> Defensa: </label>
                <span>0</span>
                <input
                  onChange={(e) => handleChange(e)}
                  name="defense"
                  className="input-range"
                  type="range"
                  min="0"
                  max="100"
                />
                <span>100</span>
              </div>
            </div>
          </div>
          <div className="form-buttons">
            <button className="button-36" type="submit">
              <img src={disket} width={15} alt="disket"></img>Guardar{" "}
            </button>
            <button
              data-testid="cancelbutton"
              className="button-36"
              onClick={handleClose}
            >
              {" "}
              <img src={x} width={20} alt="X"></img> Cancelar{" "}
            </button>
          </div>
        </form>
      ) : (
        <form data-testid="formulario" onSubmit={handleSubmit}>
          <div className="label-conteiner">
            <div>
              <div className="input-label">
                <label>Nombre:</label>
                <input
                  onChange={(e) => handleChangeName(e)}
                  title="El nombre del Pokemon debe ser 1 sola palabra y no debe contener caracteres especiales"
                  name="name"
                  pattern="[a-zA-Z]+"
                  maxLength={15}
                  type="text"
                  placeholder={name}
                ></input>
              </div>
              <div className="input-label">
                <label> Imagen: </label>
                <input
                  onChange={(e) => handleChange(e)}
                  name="image"
                  type="url"
                  placeholder={image}
                ></input>
              </div>
            </div>

            <div>
              <div className="input-label">
                <label> Ataque: </label>
                <span>0</span>
                <input
                  onChange={(e) => handleChange(e)}
                  defaultValue={attack}
                  name="attack"
                  className="input-range"
                  type="range"
                  min="0"
                  max="100"
                />
                <span>100</span>
              </div>
              <div className="input-label">
                <label> Defensa: </label>
                <span>0</span>
                <input
                  onChange={(e) => handleChange(e)}
                  defaultValue={defense}
                  name="defense"
                  className="input-range"
                  type="range"
                  min="0"
                  max="100"
                />
                <span>100</span>
              </div>
            </div>
          </div>
          <div className="form-buttons">
            <button className="button-36" type="submit">
              {" "}
              <img src={disket} width={15} alt="disket"></img> Guardar{" "}
            </button>
            <button className="button-36" onClick={handleClose}>
              {" "}
              <img src={x} width={15} alt="X"></img> Cancelar{" "}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
