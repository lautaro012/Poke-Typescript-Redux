import '@testing-library/jest-dom'
import Form from './Form'
import {fireEvent, render, screen} from '@testing-library/react'

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
//   useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

const defaultProps = {
    newPokemon:true,
    setPokemon: jest.fn(),
    setEditPokemon: jest.fn(),
    formData: {
        id: 0,
        name: 'name',
        image: 'image',
        attack: 50,
        defense: 50,
        hp: 0,
        type: 'earth',
        idAuthor: 1
    }
}

const getForm = (additionalProps = {}) => {
    return render(
        <Form {...defaultProps} {...additionalProps} />
    )
}



// test('should render', () => {
//     const view = getForm() 
//     expect(view).to.Be.Truthy()
// })

describe('Form', () => {
    it('should render', () => {
        const view = getForm() 
        expect(view).toBeTruthy()
    })
    it('should dispatch an action on Submit', () => {
        getForm()
        const Formulario = screen.getByTestId('formulario')
        fireEvent.submit(Formulario)
        expect(mockDispatch).toHaveBeenCalledTimes(1)
    })
    it('should call setPokemon and setEditPokemon on cancel button click', () => {
        const setPokemonMock = jest.fn()
        const setEditPokemonMock = jest.fn()
        getForm({setPokemon:(arg) => setPokemonMock(arg), setEditPokemon:(arg) => setEditPokemonMock(arg)})
        const cancelButton = screen.getByTestId('cancelbutton')
        fireEvent.click(cancelButton)
        expect(setEditPokemonMock).toHaveBeenCalledWith(false)
        expect(setPokemonMock).toHaveBeenCalledWith(false)  
    })
})