import React, { createContext, useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';

import { Firebase } from './firebase';
import { AuthContext } from './AuthContext';

export const NoteContext = createContext();

const collection = Firebase.firestore().collection('note');

const create = (user) => {
    const ref = collection.doc();
    ref.set({owner: user.uid, pin: false, text: '', time: firebase.firestore.FieldValue.serverTimestamp()});
    return ref.id;
};

const update = (note) =>
    collection.doc(note.id).set(
        {pin: !!note.pin, text: note.text, time: firebase.firestore.FieldValue.serverTimestamp()},
        {merge: true}
    );

const togglePin = (note) => update({...note, pin: !note.pin});

const deleteNote = (note) => collection.doc(note.id).delete();

// Do we want a Flux type arrangement here?
// What about pagination (infinite scroll style)? If a user has a lot of notes you don't really want to load them all.
export const NoteProvider = ({children}) => {
    const {user} = useContext(AuthContext);
    const [notes, setNotes] = useState();

    useEffect(() => {
        if (!user) return;

        const unsubscribe = collection
            .where('owner', '==', user.uid)
            .orderBy('pin', 'desc')
            .orderBy('time', 'desc')
            .onSnapshot((snapshot) =>
                setNotes(snapshot.docs.map((doc) => ({...doc.data({serverTimestamps: 'estimate'}), id: doc.id})))
            );

        return () => unsubscribe();
    }, [user]);

    return <NoteContext.Provider value={{create: () => create(user), update, deleteNote, togglePin, notes}}>
        {children}
    </NoteContext.Provider>
};

export const useNotes = () => useContext(NoteContext);
