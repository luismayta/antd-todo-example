import * as React from 'react';
import ClearTodoForm from '../container/forms/clearTodoForm';
import CreateTodoForm from '../container/forms/createTodoForm';
import RemoveTodoForm from '../container/forms/removeTodoForm';
import SaveTodoForm from '../container/forms/saveTodoForm';
import TodoList from '../container/todoList';

interface IProps {
    //
}

interface IState {
    //
}

export class Home extends React.Component<IProps, IState> {

    public render() {
        return (
            <div>

                <header>
                    <h1><i className="nes-logo brand" /> Sample ToDo App</h1>
                    <p>Using React Framework.</p>
                </header>

                <section className="form nes-container with-title">
                    <h2 className="title">Form</h2>
                    <div className="nes-field">
                        <CreateTodoForm />
                    </div>
                    <div className="nes-field is-inline">
                        <RemoveTodoForm />
                        <ClearTodoForm />
                        <SaveTodoForm />
                    </div>
                </section>

                <section className="nes-container with-title">
                    <h2 className="title">TodoList</h2>
                    <div className="field">
                        <TodoList />
                    </div>
                </section>
            </div>
        );
    }
}