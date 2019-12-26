import { Button } from 'antd';
import * as React from 'react';

interface IProps {
    // TODO: types
    removeTodoAction: any
}

interface IState {
    //
}

export class RemoveTodoForm extends React.Component<IProps, IState> {

    private submit = (e: React.FormEvent<any>): void => {
        e.preventDefault();
        this.props.removeTodoAction();
    };

    public render() {
        return (
            <React.Fragment>
              <Button type="default" onClick={this.submit}>
                Remove Completed Tasks
              </Button>
            </React.Fragment>
      );
    }

}
