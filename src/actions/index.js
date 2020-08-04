import {createAction} from '@reduxjs/toolkit'
import * as types from '../constants/actionTypes'

export const addToDoItem = createAction(types.ADD_TODO_ITEM, (text) => ({ payload: text }));
export const deleteToDoItem = createAction(types.DELETE_TODO_ITEM, (index) => ({ payload: index }));
