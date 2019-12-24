import * as React from 'react';

interface IProps {
    // TODO: types
    clearAction: any
}

interface IState {
    //
}

export class ClearTodoForm extends React.Component<IProps, IState> {

    private submit = (e: React.FormEvent<any>): void => {
        e.preventDefault();
        this.props.clearAction();
    };

    public render() {

        return (
            <div>
                <button className="nes-btn is-success" onClick={this.submit}>
                    Clear
                </button>
            </div>
        );
    }

}
