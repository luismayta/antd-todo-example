import { List, Typography } from 'antd';
import * as React from 'react';
import { ITodo, TTodosState } from '../../redux/reducers/todos';

interface IProps {
    todos: TTodosState
}

interface IState {
    //
}

export class TodoList extends React.Component<IProps, IState> {

    private items = (): ITodo[] => {
        const { todos } = this.props;
        return todos
    };

    public render() {
        return (
          <React.Fragment>
            <List
            header={<div> Todo List </div>}
            bordered={true}
            dataSource={this.items()}
            renderItem={ item => (
              <List.Item>
                <Typography.Text
                  mark={true}>{item.status}
                 </Typography.Text> {item.text}
              </List.Item>
            )}
            />
          </React.Fragment>
        );
    }
}
