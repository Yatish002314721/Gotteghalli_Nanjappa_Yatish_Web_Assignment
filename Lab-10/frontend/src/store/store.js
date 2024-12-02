import {createStore, combineReducers, applyMiddleware} from "redux";
import jobsReducer from "./reducers/jobsReducer";
import userReducer from "./reducers/userReducer";
import {thunk} from "redux-thunk";
import employeesReducer from "./reducers/employeesReducer";

import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
    blacklist: ['jobs', 'employees']
};


// Combine all reducers
const rootReducer = combineReducers({
    jobs: jobsReducer,
    user: userReducer,
    employees: employeesReducer,
});


// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with middleware
const store = createStore(persistedReducer, applyMiddleware(thunk));

// Create persisted store
const persistor = persistStore(store);

export {store, persistor};
