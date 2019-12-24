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
            <div>
                <button className="nes-btn is-warning" onClick={this.submit}>
                    Remove Completed Tasks
                </button>
            </div>
        );
    }

}
