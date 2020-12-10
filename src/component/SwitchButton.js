import styles from './SwitchButton.module.css';

export const SwitchButton = ({ checked, children, icon, onToggle }) => (
    <button
        aria-checked={checked}
        className={styles.host}
        onClick={onToggle}
        role="switch"
        type="button"
    >
        {icon && <span className={`${styles.icon} icon-${icon}`} />}
        {children}
    </button>
);
