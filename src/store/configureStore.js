import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { albumReducer } from "../reducers/albumReducer";
import { photoReducers } from "../reducers/showAlbumReducers";
import userReducer from "../reducers/userReducers";



const ConfigureStore = () => {
    const store = createStore(combineReducers({
        users: userReducer,
        albums: albumReducer,
        photos: photoReducers
    }), applyMiddleware(thunk))
    return store
}
export default ConfigureStore

