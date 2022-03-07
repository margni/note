import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { App } from './layout/App';

import './index.css';

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root')
);

serviceWorkerRegistration.register();
