import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootReducers } from '../reducers';
import { rootSaga } from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({});

export const createReduxStore = (preLoadedState: any): Store => {
    const store: Store = createStore(
        rootReducers,
        preLoadedState,
        composeEnhancers(applyMiddleware(sagaMiddleware, logger))
    )

    sagaMiddleware.run(rootSaga);
    return store
};