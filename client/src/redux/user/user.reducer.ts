import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


export const INITIAL_STATE = {
    userToken:'',
    currentUser:null,
    searchedMovie:null
}

const userReducer = (state = INITIAL_STATE, action:any) => {
    switch(action.type){
        case 'SIGN_IN_SUCCESS':
            return {
                ...state,
                currentUser: action.payload
            }
        case 'SIGN_IN_TOKEN':
            return {
                ...state,
                userToken: action.payload
            }
        case 'SIGN_OUT_SUCCESS':
            return {
                ...state,
                userToken:'',
                currentUser:null
            }
        case 'ADD_SEARCHED_MOVIE':
            return {
                ...state,
                searchedMovie: action.payload
            }
        default:
            return state;
    }
}

const persistConfig = {
    key:'root',
    storage,
    whitelist: ['user']
}
const rootReducer = combineReducers({
    user: userReducer
})

export default persistReducer(persistConfig,rootReducer);