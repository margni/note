import { firstLine } from '../helper/firstLine';

import { NoteTagList } from './NoteTagList';
import { classNames } from '../helper/classNames';

import styles from './NoteList.module.css';

const NoteListItem = ({
    note,
    onSelect,
    selected = false,
    pinToggle = false,
}) => (
    <li
        className={classNames(
            { item: true, selected, pinned: pinToggle },
            styles
        )}
        key={note.id}
    >
        <button className={styles.button} onClick={onSelect}>
            {note.pin && (
                <span className={`${styles.inlinePin} icon-pin`}></span>
            )}
            {note.archive && (
                <span className={`${styles.inlinePin} icon-archive`}></span>
            )}
            <span className={styles.title}>{firstLine(note.text)}</span>
            <div className={styles.tags}>
                <NoteTagList note={note} />
            </div>
        </button>
    </li>
);

// TODO Another approach might be to put a divider in such as:
//{notes[i-1]?.pin !== note.pin ? note.pin ? 'Pinned' : 'Everything Else' : ''}
export const NoteList = ({ notes, onSelect, selectedNote }) => (
    <ol className={styles.host}>
        {notes.map((note, i) => (
            <NoteListItem
                key={i}
                note={note}
                onSelect={() => onSelect(note)}
                selected={selectedNote === note}
            />
        ))}
    </ol>
);
