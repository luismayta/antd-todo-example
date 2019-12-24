import { connect } from 'react-redux';
import { TodoList } from '../components/Todo';
import { IAppState } from '../redux/reducers';

export default connect(
    (state: IAppState) => ({
        todos: state.todos
    }),
    {
        //
    }
)(TodoList);
