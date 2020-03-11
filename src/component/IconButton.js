import React from 'react';

import './IconButton.css';

// key is used to force re-render for css animation.
export const IconButton = ({name, onClick, size, position, secondary}) =>
    <button
        className={'IconButton icon-' + name + (size === 'large' ? ' IconButton--large' : '') + (position === 'right' ? ' IconButton--right' : '') + (secondary ? ' IconButton--secondary' : '')}
        key={name}
        onClick={onClick}
    ></button>;
