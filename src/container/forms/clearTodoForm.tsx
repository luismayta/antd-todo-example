import { connect } from 'react-redux';
import { ClearTodoForm } from '../../components/forms/clearTodoForm';
import { clearAction } from '../../redux/actions/todos';
import { IAppState } from '../../redux/reducers';

export default connect(
    (state: IAppState) => ({
        //
    }),
    {
        clearAction
    }
)(ClearTodoForm);
