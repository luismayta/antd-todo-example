import { Action, ActionMeta, handleActions } from 'redux-actions';
import { addTodoAction, clearAction, removeTodoAction, updateTodoAction } from '../actions';

export enum TodoStatusEnum {
    pending,
    completed
}

export interface ITodoId {
    id: number;
}

export interface ITodo {
    status: TodoStatusEnum;
    text: string;
}

export type TTodosState = ITodo[];
export const initialState: TTodosState = [];

export const todos = handleActions<any, any>({

    [addTodoAction.toString()]: (state: TTodosState, action: Action<ITodo>) => ([
        ...state,
        action.payload
    ]),

    [updateTodoAction.toString()]: (state: TTodosState, action: ActionMeta<ITodo, ITodoId>) => {
        return [
            ...state.slice(0, action.meta.id),
            action.payload,
            ...state.slice(action.meta.id + 1)
        ];
    },

    [removeTodoAction.toString()]: (state: TTodosState, action: Action<any>) => {
        return state.filter((todo: ITodo, idx: number) => {
            return (todo.status !== TodoStatusEnum.completed);
        })
    },

    [clearAction.toString()]: (state: TTodosState, action: Action<any>) => initialState,

}, initialState);
