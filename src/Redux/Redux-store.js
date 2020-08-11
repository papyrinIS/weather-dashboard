import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {initState, Reducer} from "./Reducer";


let reducers = combineReducers({
    Reducer:Reducer

})

//localStorage.clear()


const store = createStore(reducers,
    (localStorage['weather'])
        ?JSON.parse(localStorage['weather'])
        :{}
        ,applyMiddleware(thunkMiddleware))



store.subscribe(() => {
if(localStorage['weather'])
    localStorage['weather'] = JSON.stringify(store.getState())
else
    localStorage['weather'] = JSON.stringify(initState)

});


window.store = store;
export default store