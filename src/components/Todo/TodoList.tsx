import * as React from 'react';
import TodoItem from '../../container/todoItem';
import { ITodo, TTodosState } from '../../redux/reducers/todos';

interface IProps {
    todos: TTodosState
}

interface IState {
    //
}

export class TodoList extends React.Component<IProps, IState> {

    private items = (): JSX.Element[] => {
        const { todos } = this.props;
        return todos.map((todo: ITodo, idx: number) =>
            <TodoItem key={idx} {...todo} id={idx} />
        );
    };

    public render() {

        return (
            <div>
                <ul>
                    {this.items()}
                </ul>
            </div>
        );
    }

}
