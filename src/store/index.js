import { createStore, combineReducers } from 'redux';
import shoesShopReducer from './reducers/ShoesShopReducer';

// Khởi tạo root reducer (quản lý các reducers con)
const rootReducer = combineReducers({
  // key: value
  shoesShopReducer, // shoesShopReducer: shoesShopReducer
});

// Khởi tạo redux store (quản lý root reducer)
const store = createStore(
  rootReducer,
  // Config redux dev tool
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
