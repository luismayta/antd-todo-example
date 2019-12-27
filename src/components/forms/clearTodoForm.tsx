import { Button } from 'antd';
import * as React from 'react';

interface IProps {
    clearAction: any
}

export const ClearTodoForm: React.FC <IProps> = (props) => {

  const handleSubmit = (event: React.FormEvent<any>): void => {
    event.preventDefault()
    props.clearAction()
  }

  return (
          <React.Fragment>
            <Button type="default" onClick={handleSubmit}>
                Clear
            </Button>
          </React.Fragment>
        );
}
