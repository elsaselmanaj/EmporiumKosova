import { combineReducers } from 'redux';
import { languageReducer} from './reducers/languageReducer';
import { productListReducer } from './reducers/productReducer';
import {userLoginReducer, userRegisterReducer, userDetailsReducer} from './reducers/userReducer'

const rootReducer = combineReducers({
    language: languageReducer,
    productList: productListReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer
});
  
export default rootReducer;