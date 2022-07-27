import { combineReducers } from "redux";
import { languageReducer } from "./reducers/languageReducer";
import { productCreateReviewReducer, productListReducer } from "./reducers/productReducer";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducer";
import { productDetailsReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderListMyReducer
} from "./reducers/orderReducer";

const rootReducer = combineReducers({
  language: languageReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productReviewCreate: productCreateReviewReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer
});

export default rootReducer;
