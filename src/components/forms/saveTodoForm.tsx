import { Button } from 'antd';
import * as localforage from 'localforage';
import * as React from 'react';
import { STORE_LOCALFORAGE_KEY } from '../../constants';
import { TTodosState } from '../../redux/reducers/todos';

interface IProps {
    todos: TTodosState
}

export const SaveTodoForm: React.FC<IProps> = (props) => {

  const handleSubmit = (event: React.FormEvent<any>) : void => {
    event.preventDefault()
    const todos = props.todos;

    localforage.setItem(STORE_LOCALFORAGE_KEY, { todos }).then((value: any) => {
        // Do other things once the value has been saved.
    }).catch((err: any) => {
        // This code runs if there were any errors
        console.log(err);
    });
  }

  return (
    <React.Fragment>
      <Button type="default" onClick={handleSubmit}>
          Save
      </Button>
    </React.Fragment>
  )
}