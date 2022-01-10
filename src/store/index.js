import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
// import rootReducers from './reducer';
import { catListReducer } from './reducer/listReducer';


const store = createStore(
    catListReducer,
    applyMiddleware(thunk)
)

export default store;