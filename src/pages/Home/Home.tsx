import { Layout, Typography } from 'antd';
import * as React from 'react';
import ClearTodoForm from '../../container/forms/clearTodoForm';
import CreateTodoForm from '../../container/forms/createTodoForm';
import RemoveTodoForm from '../../container/forms/removeTodoForm';
import SaveTodoForm from '../../container/forms/saveTodoForm';
import TodoList from '../../container/todoList';
const {Title, Paragraph} = Typography
const {Header,Content} = Layout

interface IProps {
    //
}

interface IState {
    //
}

export class Home extends React.Component<IProps, IState> {

    public render() {
        return (
          <React.Fragment>
            <Layout>
              <Typography>
              <Header>
                  <Title>
                    Sample Todo App
                  </Title>
                  <Paragraph>
                    Using React Framework.
                  </Paragraph>
              </Header>

              <Content>
                  <Title level={2}>
                    Form
                  </Title>
                        <CreateTodoForm />
                        <RemoveTodoForm />
                        <ClearTodoForm />
                        <SaveTodoForm />
                <TodoList />
              </Content>
              </Typography>
            </Layout>
          </React.Fragment>
        );
    }
}