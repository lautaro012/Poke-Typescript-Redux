import '@testing-library/jest-dom'
import Searchbar from './Searchbar'
import {fireEvent, render, screen} from '@testing-library/react'

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
//   useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));


const getSearchbar = (additionalProps = {}) => {
    return render(
        <Searchbar{...additionalProps} />
    )
}


describe('Searchbar', () => {
    it('should render', () => {
        const view = getSearchbar() 
        expect(view).toBeTruthy()
    })
    it('should dispatch an Action when searchbutton is clicked', () => {
        getSearchbar()
        const inputsearch = screen.getByRole('button')
        fireEvent.click(inputsearch)
        expect(mockDispatch).toHaveBeenCalledTimes(1)
    })
})