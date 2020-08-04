import { createReducer } from '@reduxjs/toolkit'
import { DELETE_TODO_ITEM, ADD_TODO_ITEM } from '../constants/actionTypes'

const initState = {
    items: []
}

export default createReducer(initState, {
    [DELETE_TODO_ITEM]: (state, action) => ({items: state.items.filter((item, index) => action.payload !== index)}),
    [ADD_TODO_ITEM]: (state, action) => ({items: [...state.items, action.payload ]})
})