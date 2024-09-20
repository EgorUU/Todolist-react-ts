import { create } from "domain";
import { createStore, combineReducers } from "redux";

import reduce1 from './reducers/reduce1'


// const reducers = combineReducers({
    
// })

const store = createStore(reduce1)

export default store