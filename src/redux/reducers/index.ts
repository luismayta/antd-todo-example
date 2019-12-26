import { combineReducers } from 'redux';
import { todos, TTodosState } from './todos';

export interface IAppState {
    todos: TTodosState
}

export const rootReducers = combineReducers<IAppState>({
    todos
});
