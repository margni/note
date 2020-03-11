import React from 'react';

import empty from '../empty.svg';
import './Empty.css';

export const Empty = ({message}) => <div className="Empty">
    <img alt=" " src={empty} />
    {message}
</div>;
