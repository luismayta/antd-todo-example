import { connect } from 'react-redux';
import { SaveTodoForm } from '../../components/forms/saveTodoForm';
import { IAppState } from '../../redux/reducers';

export default connect(
    (state: IAppState) => ({
        todos: state.todos
    }),
    {
        //
    }
)(SaveTodoForm);
