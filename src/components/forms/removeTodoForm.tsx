import { Button } from 'antd';
import * as React from 'react';

interface IProps {
    // TODO: types
    removeTodoAction: any
}


export const RemoveTodoForm: React.FC<IProps> = (props) => {

  const handleSubmit = (event: React.FormEvent<any>): void => {
      event.preventDefault();
      props.removeTodoAction();
  };

  return (
    <React.Fragment>
      <Button type="default" onClick={handleSubmit}>
        Remove Completed Tasks
      </Button>
    </React.Fragment>
  )
}