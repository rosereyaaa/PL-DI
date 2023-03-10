import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
// import { productsReducer } from './reducers/productReducers'
import { productsReducer, productDetailsReducer } from './reducers/productReducers'
import { authReducer, userReducer } from './reducers/userReducers';

// const reducer = combineReducers({
//     products: productsReducer
// })

let initialState = {

}

const middlware = [thunk]
const reducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    auth: authReducer,
    user: userReducer
})
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;