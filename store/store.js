import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

const store = createStore(
    reducer,
    // initialState,
    composeWithDevTools(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;