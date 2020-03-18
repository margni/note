import React from 'react';

import './IconButton.css';

export const IconButton = ({name, onClick, position, secondary, size}) =>
    <button
        className={'IconButton icon-' + name + (size === 'large' ? ' IconButton--large' : '') + (position === 'right' ? ' IconButton--right' : '') + (secondary ? ' IconButton--secondary' : '')}
        onClick={onClick}
    />;
