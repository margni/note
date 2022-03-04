import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { App } from './layout/App';
import { firebaseApp } from './firebaseApp';

import './index.css';

firebaseApp
    .auth()
    .onAuthStateChanged(() =>
        ReactDOM.render(<App />, document.getElementById('root'))
    );

serviceWorkerRegistration.register();
