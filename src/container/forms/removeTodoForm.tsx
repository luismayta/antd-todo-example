import { connect } from 'react-redux';
import { RemoveTodoForm } from '../../components/forms/removeTodoForm';
import { removeTodoAction } from '../../redux/actions/todos';
import { IAppState } from '../../redux/reducers';

export default connect(
    (state: IAppState) => ({
        //
    }),
    {
        removeTodoAction
    }
)(RemoveTodoForm);
