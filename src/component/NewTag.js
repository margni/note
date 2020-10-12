import React, { useState } from 'react';

import { IconButton } from './IconButton';
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
                icon="edit"
                maxLength={30}
                onChange={setValue}
                secondary={
                    <IconButton
                        name="add-tag"
                        title="Save New Tag"
                        type="submit"
                    />
                }
                title="New Tag"
                value={value}
            />
        </form>
    );
};
