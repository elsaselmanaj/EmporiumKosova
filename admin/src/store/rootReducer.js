import { combineReducers } from "redux";
import {userLoginReducer, userListReducer} from './reducers/userReducer'
import {productCreateReducer, productDeleteReducer, productEditReducer, productListReducer, productUpdateReducer} from './reducers/productReducer'
import {orderDeliveredReducer, orderDetailsReducer, orderListReducer} from "./reducers/orderReducer"
import { languageReducer } from "./reducers/languageReducer";


const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userList: userListReducer,
  productList: productListReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productEdit: productEditReducer,
  productUpdate: productUpdateReducer,
  orderList: orderListReducer,
  orderDetails: orderDetailsReducer,
  orderDeliver: orderDeliveredReducer,
  language: languageReducer
});

export default rootReducer;
