import { DatePicker, Icon, Input, List } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';

export class Todo extends React.Component {
	public state: any;
  public setState: any;

  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  handlePressEnter = (event) => {
    // Create a todo object containing its index, content,
    // as well as an empty date
    const todo = {
      index: this.state.todos.length,
      content: event.target.value,
      date: null,
      dateString: '',
    };

    // Add the new todo to our array
    const newTodos = this.state.todos.concat(todo);

    this.setState({
      todos: newTodos,
    });

    // Clear input
    event.target.value = '';
  };

  removeTodo = (index) => {
    let newTodos = [...this.state.todos];

    // Remove element
    newTodos.splice(index, 1);

    // Decrement greater indexes
    for (let i = index; i < newTodos.length; i++) {
      newTodos[i].index -= 1;
    }

    // Update state
    this.setState({
      todos: newTodos,
    });
  };

  setDate = (index, date, dateString) => {
    // Set the date of the given todo
    let newTodos = [...this.state.todos];
    newTodos[index].date = date;
    newTodos[index].dateString = dateString;

    // Initialize the state
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <div className="todoContainer">
        <h1>TODO App</h1>

        <Input
          placeholder="What needs to be done?"
          onPressEnter={this.handlePressEnter}
        />

        <List
          // emptyText sets the text to display in an empty list
          locale={{ emptyText: 'No todo items' }}
          dataSource={this.state.todos}
          renderItem={(item) => (
            <TodoItem
              todo={item}
              removeTodo={this.removeTodo}
              setDate={this.setDate}
            />
          )}
        />
      </div>
    );
  }
}

export class TodoItem extends React.Component {
	public props: any;
  remove = () => {
    // Remove this TodoItem
    this.props.removeTodo(this.props.todo.index);
  };

  handleDateChange = (date, dateString) => {
    // Update the date when changed
    this.props.setDate(
      this.props.todo.index,
      date,
      dateString,
    );
  };

  render() {
    return (
      <List.Item
        actions={[
          <DatePicker
            format="MM/DD/YYYY"
            onChange={this.handleDateChange}
            value={this.props.todo.date}
          />,
          <Icon
            type="close-circle"
            theme="filled"
            onClick={this.remove}
          />,
        ]}
      >
        {this.props.todo.content}
      </List.Item>
    );
  }
}
