import { SwitchButton } from './SwitchButton';

import styles from './SwitchList.module.css';

// TODO Bring selected tags to the top?
export const SwitchList = ({ icon, onToggle, selected, values }) => (
    <ul className={styles.host}>
        {values.map((value, i) => (
            <li key={i}>
                <SwitchButton
                    checked={selected?.includes(value)}
                    onToggle={() => onToggle(value)}
                    icon={icon}
                >
                    {value}
                </SwitchButton>
            </li>
        ))}
    </ul>
);
