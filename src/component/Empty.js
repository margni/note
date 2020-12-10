import empty from '../image/empty.svg';
import styles from './Empty.module.css';

export const Empty = ({ message }) => (
    <div className={styles.host}>
        <img alt=" " className={styles.image} src={empty} />
        {message}
    </div>
);
