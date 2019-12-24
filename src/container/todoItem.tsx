import { connect } from 'react-redux';
import { TodoItem } from '../components/Todo';
import { updateTodoAction } from '../redux/actions/todos';
import { IAppState } from '../redux/reducers';

export default connect(
    (state: IAppState) => ({
        //
    }),
    {
        updateTodoAction
    }
)(TodoItem);
