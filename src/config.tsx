import rootReducer from '../src/redux/reducer';
import { useDispatch } from 'react-redux';
const { configureStore } = require ('@reduxjs/toolkit');

const store = configureStore({
    reducer: rootReducer
})
type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;