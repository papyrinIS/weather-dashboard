import {applyMiddleware, combineReducers, createStore, Action} from "redux";
import {initState, Reducer} from "./Reducer"
import thunk, {ThunkAction} from "redux-thunk";


const rootReducer = combineReducers({Reducer})
export type AppStateType = ReturnType<typeof rootReducer>


export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>


const store = createStore(rootReducer,
    (localStorage['weather'])
        ? JSON.parse(localStorage['weather'])
        : {}
    , applyMiddleware(thunk))


store.subscribe(() => {
    if (localStorage['weather'])
        localStorage['weather'] = JSON.stringify(store.getState())
    else
        localStorage['weather'] = JSON.stringify(initState)
});

// @ts-ignore
window.store = store;


export default store