import '@testing-library/jest-dom'
import Pokemones from './Pokemones'
import {fireEvent, render, screen} from '@testing-library/react'

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
//   useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

const defaultProps = {
    poke: {
        id: 1,
        name: 'test-name',
        image: 'test-image',
        attack: 50,
        defense: 25,
        hp: 0,
        type: 'test-type',
        idAuthor: 1
    }, 
    onPokemonEdit: []
}


const getPokemones = (additionalProps = {}) => {
    return render(
        <table>
            <tbody>
                <Pokemones {...defaultProps} {...additionalProps} />
            </tbody>
        </table>
    )
}

describe('Pokemones', () => {
    it('should render', () => {
        const view = getPokemones() 
        expect(view).toBeTruthy()
    })
    it('should render the name of the pokemon', () => {
        getPokemones()
        expect(screen.getByText('test-name')).toBeDefined()
    })
    it('should render the image of the pokemon', () => {
        getPokemones()
        expect(screen.getAllByTestId('test-image')).toBeDefined()
    })
    it('should render the attack of the pokemon', () => {
        getPokemones()
        expect(screen.getByText('50')).toBeDefined()
    })
    it('should render the defense of the pokemon', () => {
        getPokemones()
        expect(screen.getByText('25')).toBeDefined()
    })
    it('should dispatch an Action on DeleteButton click', () => {
        getPokemones()
        const deletebutton = screen.getByTestId('deletebutton')
        fireEvent.click(deletebutton)
        expect(mockDispatch).toHaveBeenCalledTimes(1)
    })
})