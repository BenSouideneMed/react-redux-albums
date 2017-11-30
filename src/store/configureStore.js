import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

// apply the middleware

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        // apply the middleware
       composeWithDevTools(
            applyMiddleware(thunk),
            // other store enhancers if any
       )
    );
}