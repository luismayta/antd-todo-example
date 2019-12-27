import * as ClassNames from 'classnames';
import * as React from 'react';
import { ITodo, ITodoId, TodoStatusEnum } from '../../redux/reducers/todos';

interface IProps extends ITodoId, ITodo {
    // TODO: types
    updateTodoAction: any
}

export const TodoItem: React.FC<IProps> = (props) => {

  const {id, text, status } = props;
  const isCompleted = (status === TodoStatusEnum.completed);
  const itemFlag = ClassNames('nes-icon', 'like', { 'is-empty': !isCompleted });

  const handleOnUpdateTodo = (): void => {
      const todo: ITodo = {
            status: (!status) ? TodoStatusEnum.completed : TodoStatusEnum.pending,
            text
      };
      props.updateTodoAction(todo,  id)
  }
  return (
    <li className="font-misaki" onClick={handleOnUpdateTodo}>
        <i className={itemFlag} />
        {text}
    </li>
  )

}
