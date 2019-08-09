import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import blogsReducer from '../reducers/blogs';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

export default () => {
    const store = createStore(
        combineReducers({
            blogs: blogsReducer,
            filters: filtersReducer,
             auth: authReducer,

        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}