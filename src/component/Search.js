import React from 'react';

import {IconButton} from './IconButton';

import './Search.css';

export const Search = ({onChange, value}) => <div className="Search">
    <span className="Search__Icon icon-search" />
    <input
        className={'Search__Input' + (value ? ' Search__Input--hasValue' : '')}
        onChange={(event) => onChange(event.target.value)}
        type="text"
        value={value}
    />
    {value ? <div className="Search__Close"><IconButton name="close" onClick={() => onChange('')} /></div> : ''}
</div>;
