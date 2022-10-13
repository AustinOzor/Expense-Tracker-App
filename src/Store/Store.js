import {createStore } from 'redux'
import ExpensesReducer from "../Reducer/ExpensesReducer"

let store = createStore(ExpensesReducer)

export default store;