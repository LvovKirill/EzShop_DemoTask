import { createStore, combineReducers } from 'redux';
import productListReducer from '../reducer/ProductListReducer';



const rootReducer = combineReducers({

  productList: productListReducer,

});


const store = createStore(rootReducer);


export default store;