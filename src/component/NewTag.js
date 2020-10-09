import React, { useState } from 'react';

import { IconInput } from './IconInput';

import styles from './NewTag.module.css';

export const NewTag = ({ onSaveTag }) => {
    const [value, setValue] = useState('');

    const save = (event) => {
        event.preventDefault();

        if (value.trim()) {
            onSaveTag(value.trim());
        }

        setValue('');
    };

    return (
        <form className={styles.host} onSubmit={save}>
            <IconInput
                maxLength={30}
                secondaryActionIcon="add-tag"
                secondaryActionType="submit"
                icon="edit"
                onChange={setValue}
                value={value}
            />
        </form>
    );
};
