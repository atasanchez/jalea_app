import React, {FC, ReactElement} from 'react';
import {createAppContainer} from 'react-navigation';

// Router
import AppContainer from './router';

const App: FC<{}> = (): ReactElement => <AppContainer />;

export default App;
