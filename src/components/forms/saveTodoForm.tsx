import * as localforage from 'localforage';
import * as React from 'react';
import { STORE_LOCALFORAGE_KEY } from '../../constants';
import { TTodosState } from '../../redux/reducers/todos';

interface IProps {
    todos: TTodosState
}

interface IState {
    //
}

export class SaveTodoForm extends React.Component<IProps, IState> {

    private submit = (e: React.FormEvent<any>): void => {
        e.preventDefault();

        const todos = this.props.todos;

        localforage.setItem(STORE_LOCALFORAGE_KEY, { todos }).then((value: any) => {
            // Do other things once the value has been saved.
        }).catch((err: any) => {
            // This code runs if there were any errors
            console.log(err);
        });
    };

    public render() {

        return (
            <div>
                <button className="nes-btn is-primary" onClick={this.submit}>
                    Save
                </button>
            </div>
        );
    }

}
