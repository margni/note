import React from 'react';

import empty from '../empty.svg';
import './Empty.css';

export const Empty = ({message}) => <div className="Empty">
    <img alt=" " className="Empty__Image" src={empty} />
    {message}
</div>;
