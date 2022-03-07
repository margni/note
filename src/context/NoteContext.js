import React, { createContext, useContext, useEffect, useState } from 'react';
import {
    collection,
    doc,
    deleteDoc,
    enableIndexedDbPersistence,
    getFirestore,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
    setDoc,
    updateDoc,
    where,
} from 'firebase/firestore';

import { firebaseApp } from '../firebaseApp';

import { useAuth } from './AuthContext';

export const NoteContext = createContext();

const db = getFirestore(firebaseApp);

enableIndexedDbPersistence(db).catch(console.error);

const noteCollection = collection(db, 'note');

const create = (user) => {
    const ref = doc(noteCollection);
    setDoc(ref, {
        owner: user.uid,
        archive: false,
        pin: false,
        tags: [],
        text: '',
        time: serverTimestamp(),
    });
    return ref.id;
};

const update = (note) =>
    updateDoc(doc(noteCollection, note.id), {
        archive: !!note.archive,
        pin: !!note.pin,
        tags: note.tags || [],
        text: note.text,
        time: serverTimestamp(),
    });

const toggleArchive = (note) =>
    update({ ...note, archive: !note.archive, pin: false });

const togglePin = (note) => update({ ...note, pin: !note.pin });

const toggleTag = (note, tag) =>
    update({
        ...note,
        tags:
            note.tags && note.tags.includes(tag)
                ? note.tags.filter((iTag) => iTag !== tag)
                : [...note.tags, tag].sort(),
    });

const deleteNote = (note) => deleteDoc(doc(noteCollection, note.id));

export const NoteProvider = ({ children }) => {
    const { user } = useAuth();
    const [hasArchive, setHasArchive] = useState(false);
    const [notes, setNotes] = useState();
    const [tags, setTags] = useState([]);

    useEffect(() => {
        if (!user) return;

        return onSnapshot(
            query(
                noteCollection,
                where('owner', '==', user.uid),
                orderBy('pin', 'desc'),
                orderBy('time', 'desc')
            ),
            (snapshot) =>
                setNotes(
                    snapshot.docs.map((doc) => ({
                        archive: false,
                        pin: false,
                        tags: [],
                        ...doc.data({ serverTimestamps: 'estimate' }),
                        id: doc.id,
                    }))
                )
        );
    }, [user]);

    useEffect(() => {
        // TODO A counter for how many times each tag is used might be nice.
        if (!notes) {
            setHasArchive(false);
            return;
        }

        setHasArchive(notes.findIndex((note) => note.archive) > -1);

        let workingTags = [];

        notes.forEach((note) => {
            workingTags = [...workingTags, ...(note.tags || [])];
        });

        setTags(
            workingTags
                .filter((tag, index) => workingTags.indexOf(tag) === index)
                .sort()
        );
    }, [hasArchive, notes]);

    return notes ? (
        <NoteContext.Provider
            value={{
                create: () => create(user),
                update,
                deleteNote,
                toggleArchive,
                togglePin,
                toggleTag,
                notes,
                tags,
                hasArchive,
            }}
        >
            {children}
        </NoteContext.Provider>
    ) : null;
};

export const useNotes = () => useContext(NoteContext);
