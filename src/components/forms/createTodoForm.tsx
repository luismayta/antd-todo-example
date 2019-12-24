import * as React from 'react';
import { ITodo, TodoStatusEnum } from "../../redux/reducers/todos";

interface IProps {
    // TODO: types
    addTodoAction: any
}

interface IState {
    text: string;
}

export class CreateTodoForm extends React.Component<IProps, IState> {

    constructor(props : IProps) {
        super(props);
        this.state = {
            text: ''
        };
    }

    private onInputTextChange = (e: React.ChangeEvent<any>): void => {
        this.setState({
            text: e.target.value
        });
    };

    private submit = (e: React.FormEvent<any>): void => {
        e.preventDefault();
        const { text } = this.state;
        if (!text.length) {
            return;
        }

        const todo: ITodo = {
            status: TodoStatusEnum.pending,
            text: text
        };
        this.props.addTodoAction(todo);
        this.setState({
            text: ''
        });
    };

    public render() {

        const { text } = this.state;

        return (
            <div>
                <form onSubmit={this.submit}>

                    <label>Task Title</label>

                    <div className="nes-field is-inline">
                        <input type="text" className="input font-misaki" value={text} onChange={this.onInputTextChange} />

                        <button className="nes-btn is-error" onClick={this.submit}>
                            Add
                        </button>
                    </div>

                </form>
            </div>
        );
    }

}
