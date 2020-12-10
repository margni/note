import styles from './AppBar.module.css';

export const AppBar = ({ children }) => (
    <nav className={styles.host}>{children}</nav>
);
