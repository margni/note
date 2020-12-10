import { IconButton } from './IconButton';
import { classNames } from '../helper/classNames';

import styles from './ContextMenu.module.css';

export const ContextMenu = ({
    children,
    open,
    onToggle,
    name = 'context-menu',
    title,
    width = 'normal',
}) => (
    <div
        className={classNames(
            {
                host: true,
                narrow: width === 'narrow',
                toolbar: width === 'toolbar',
            },
            styles
        )}
    >
        <IconButton
            title={`Open ${title}`}
            name={name}
            onClick={() => onToggle(true)}
            secondary
        />
        {open && (
            <>
                <div
                    className={styles.overlay}
                    onClick={() => onToggle(false)}
                />
                <nav className={styles.menu}>
                    <div className={styles.close}>
                        <IconButton
                            name="close"
                            onClick={() => onToggle(false)}
                            title={`Close ${title}`}
                        />
                    </div>
                    {children}
                </nav>
            </>
        )}
    </div>
);
