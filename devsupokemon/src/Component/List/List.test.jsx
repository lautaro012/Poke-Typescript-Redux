import '@testing-library/jest-dom'
import List from './List'
import {fireEvent, render, screen} from '@testing-library/react'
import { hasRestParameter } from 'typescript';

const mockDispatch = jest.fn();
const mockSelector = jest.fn().mockReturnValue([{name:'test'},{name:'test2'}])

jest.mock('react-redux', () => ({
  useSelector: () => mockSelector(),
  useDispatch: () => mockDispatch
}));

const defaultProps = {
    onPokemonEdit: jest.fn()
}

const getList = (additionalProps = {}) => {
    return render(
        <List {...defaultProps} {...additionalProps} />
    )
}

describe('List', () => {
    it('should render', () => {
        const view = getList() 
        expect(view).toBeTruthy()
    })
    it('Should Dispatch an Action on useEffect', () => {
        getList()
        expect(mockDispatch).toHaveBeenCalledTimes(1)
    })
})