import { List, Typography } from 'antd';
import * as React from 'react';
import { ITodo, TTodosState } from '../../redux/reducers/todos';

interface IProps {
    todos: TTodosState
}

export const TodoList : React.FC<IProps> = (props) => {
  const { todos } = props;

  const getItems = (): ITodo[] => {
    return todos
  };
  return (
    <React.Fragment>
      <List
      header={<div> Todo List </div>}
      bordered={true}
      dataSource={getItems()}
      renderItem={ item => (
        <List.Item>
          <Typography.Text
            mark={true}>{item.status}
          </Typography.Text> {item.text}
        </List.Item>
      )}
      />
    </React.Fragment>
  )
}