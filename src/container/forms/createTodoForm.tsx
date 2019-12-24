import { connect } from 'react-redux';
import { CreateTodoForm } from '../../components/forms/createTodoForm';
import { addTodoAction } from '../../redux/actions/todos';
import { IAppState } from '../../redux/reducers';

export default connect(
    (state: IAppState) => ({
        //
    }),
    {
        addTodoAction
    }
)(CreateTodoForm);
