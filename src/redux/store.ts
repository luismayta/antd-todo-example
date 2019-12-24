import { applyMiddleware, compose, createStore, Store } from 'redux';
import * as promiseMiddleware from 'redux-promise';
import reducer from './reducers';

const useDevTools =
    process.env.NODE_ENV !== 'production' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers = useDevTools
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const middlewareEnhancer = applyMiddleware(promiseMiddleware);

export const createReduxStore = (preLoadedState: any): Store => {
    return createStore(
        reducer,
        preLoadedState,
        composeEnhancers(middlewareEnhancer)
    );
};
