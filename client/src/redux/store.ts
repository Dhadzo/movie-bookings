import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import userReducer from './user/user.reducer';



export const store = createStore(userReducer)

export const persistor = persistStore(store);

export default { store, persistor };