import '@testing-library/jest-dom'
import Navbar from './Navbar'
import {fireEvent, render, screen} from '@testing-library/react'

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
//   useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));


const defaultProps = {
    setPokemon: jest.fn(), 
    setEditPokemon: jest.fn()
}

const getNavbar = (additionalProps = {}) => {
    return render(
        <Navbar {...defaultProps} {...additionalProps} />
    )
}

describe('Navbar', () => {
    it('should render', () => {
        const view = getNavbar() 
        expect(view).toBeTruthy()
    })
    it('should call setPokemon and setEditPokemon on click', () => {
        const setPokemonMock = jest.fn()
        const setEditPokemonMock = jest.fn()
        getNavbar({setPokemon:(arg) => setPokemonMock(arg), setEditPokemon:(arg) => setEditPokemonMock(arg)})
        const button = screen.getByTestId('newpokemon-button')
        fireEvent.click(button)
        expect(setEditPokemonMock).toHaveBeenCalledWith(false)
        expect(setPokemonMock).toHaveBeenCalledWith(true)  
    })
})
