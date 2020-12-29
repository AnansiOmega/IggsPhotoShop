import { combineReducers } from 'redux'
import auth from './auth'
import photos from './photos'
import photo from './photo'
import cart from './cart'


export default combineReducers({
    auth,
    photos,
    photo,
    cart
})