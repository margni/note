import React from 'react';

import logo from '../logo.svg';
import './SignIn.css';

// todo login - provide more login options
// todo logo centered in same location as loading logo (but not animated obviously)
export const SignIn = ({onClick}) => <section className="SignIn">
    <img alt="mNote" className="SignIn__Image" src={logo} />
    <button className="SignIn__Button" onClick={onClick}>Sign in with Google</button>
    <p className="SignIn__Footer">© <a className="SignIn__Link" href="http://margni.com">Margni Ltd.</a> 2020</p>
</section>;
