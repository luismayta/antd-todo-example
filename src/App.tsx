import * as React from 'react';
import { Home } from './components/home';

interface IProps {
    //
}

interface IState {
    //
}

export class App extends React.Component<IProps, IState> {

    public render() {
        return (
            <div className="App">
                <Home />
            </div>
        );
    }

}
