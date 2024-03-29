import logo from '../image/logo.svg';
import styles from './SignIn.module.css';

// todo login - provide more login options
// todo logo centered in same location as loading logo (but not animated obviously)
export const SignIn = ({ onClick }) => (
    <section className={styles.host}>
        <img
            alt="mNote"
            className={styles.image}
            height="512"
            src={logo}
            width="512"
        />
        <button className={styles.button} onClick={onClick}>
            Sign in with Google
        </button>
        <p className={styles.footer}>
            ©&nbsp;
            <a className={styles.link} href="http://margni.com">
                Margni Ltd.
            </a>
            &nbsp; 2020 –{' '}
            <a className={styles.link} href="https://github.com/margni/note">
                Source
            </a>
        </p>
    </section>
);
