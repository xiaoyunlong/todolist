import { configureStore } from '@reduxjs/toolkit'
import toDoListReducer from './toDoListReducer'

export default configureStore({
    reducer: {
        toDoListReducer
    }
})
