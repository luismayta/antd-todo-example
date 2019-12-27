import { Button, Form, Input } from 'antd';
import * as React from 'react';
import { useState } from 'react';
import { ITodo, TodoStatusEnum } from "../../redux/reducers/todos";

interface IProps {
    // TODO: types
    addTodoAction: any
}

interface IState {
    text: string;
}

export const CreateTodoForm: React.FC<IProps> = (props) =>{
  const [ todoValue , setState ] = useState<IState>({text: ''})

  const handleSubmit = (event : React.FormEvent<any>): void => {
    event.preventDefault();

    if (!todoValue.text.length) {
        return;
    }

    const todo: ITodo = {
        status: TodoStatusEnum.pending,
        text: todoValue.text
    };

    props.addTodoAction(todo);

    setState({
        text: ''
    });
  }

  const handleInputTextChange = (event: React.ChangeEvent<any>): void => {
      setState({
          text: event.target.value
      });
  };

  return (
      <React.Fragment>
        <Form layout="inline" onSubmit={handleSubmit}>
          <Form.Item>
              <Input
                placeholder="Input of task"
                type="text"
                value={todoValue.text}
                onChange={handleInputTextChange} />
          </Form.Item>
          <Form.Item>
              <Button type="default" onClick={handleSubmit}>
                  Add
              </Button>
          </Form.Item>
        </Form>
      </React.Fragment>
  )
}