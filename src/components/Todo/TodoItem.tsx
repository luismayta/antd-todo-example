import * as ClassNames from 'classnames';
import * as React from 'react';
import { ITodo, ITodoId, TodoStatusEnum } from '../../redux/reducers/todos';

interface IProps extends ITodoId, ITodo {
    // TODO: types
    updateTodoAction: any
}

interface IState {
    //
}

export class TodoItem extends React.Component<IProps, IState> {

    private onUpdateTodo = (): void => {
        const { id, text, status } = this.props;
        const todo: ITodo = {
            status: (!status) ? TodoStatusEnum.completed : TodoStatusEnum.pending,
            text
        };

        this.props.updateTodoAction(todo, id);
    };

    public render() {

        const { text, status } = this.props;
        const isCompleted = (status === TodoStatusEnum.completed);
        const itemFlag = ClassNames('nes-icon', 'like', { 'is-empty': !isCompleted });

        return (
            <li className="font-misaki" onClick={this.onUpdateTodo}>
                <i className={itemFlag} />
                {text}
            </li>
        );
    }

}
