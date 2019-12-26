import { Button, Form, Input } from 'antd';
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
          <React.Fragment>
            <Form layout="inline" onSubmit={this.submit}>
                <Form.Item>
                    <Input
                      placeholder="Input of task"
                      type="text"
                      value={text}
                      onChange={this.onInputTextChange} />
                </Form.Item>
                <Form.Item>
                    <Button type="default" onClick={this.submit}>
                        Add
                    </Button>
                </Form.Item>
            </Form>
          </React.Fragment>
        );
    }
}
