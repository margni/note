import React, { createContext, useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';

import { firebaseApp } from '../firebaseApp';
import { AuthContext } from './AuthContext';

export const NoteContext = createContext();

const collection = firebaseApp.firestore().collection('note');

const create = (user) => {
    const ref = collection.doc();
    ref.set({
        owner: user.uid,
        pin: false,
        tags: [],
        text: '',
        time: firebase.firestore.FieldValue.serverTimestamp(),
    });
    return ref.id;
};

const update = (note) =>
    collection.doc(note.id).set(
        {
            pin: !!note.pin,
            tags: note.tags || [],
            text: note.text,
            time: firebase.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
    );

const togglePin = (note) => update({ ...note, pin: !note.pin });

const toggleTag = (note, tag) =>
    update({
        ...note,
        tags:
            note.tags && note.tags.includes(tag)
                ? note.tags.filter((iTag) => iTag !== tag)
                : [...note.tags, tag].sort(),
    });

const deleteNote = (note) => collection.doc(note.id).delete();

export const NoteProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [notes, setNotes] = useState();
    const [tags, setTags] = useState([]);

    useEffect(() => {
        if (!user) return;

        return collection
            .where('owner', '==', user.uid)
            .orderBy('pin', 'desc')
            .orderBy('time', 'desc')
            .onSnapshot((snapshot) =>
                setNotes(
                    snapshot.docs.map((doc) => ({
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
            return;
        }

        let workingTags = [];

        notes.forEach((note) => {
            workingTags = [...workingTags, ...(note.tags || [])];
        });

        setTags(
            workingTags
                .filter((tag, index) => workingTags.indexOf(tag) === index)
                .sort()
        );
    }, [notes]);

    return (
        <NoteContext.Provider
            value={{
                create: () => create(user),
                update,
                deleteNote,
                togglePin,
                toggleTag,
                notes,
                tags,
            }}
        >
            {children}
        </NoteContext.Provider>
    );
};

export const useNotes = () => useContext(NoteContext);
