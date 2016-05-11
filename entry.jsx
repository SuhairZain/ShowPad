import React from 'react';
import {render} from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import App from './src/App.jsx';

render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <App/>
    </MuiThemeProvider>,
    document.getElementById('root')
);
