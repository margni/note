import React, { createContext, useContext, useEffect, useState } from 'react';

import { Firebase } from './firebase';
import { AuthContext } from './AuthContext';

export const NoteContext = createContext();

const collection = Firebase.firestore().collection('note');

const create = (user) => {
    const ref = collection.doc();
    ref.set({owner: user.uid, pin: false, text: '', time: new Date()});
    return ref.id;
};

const update = (note) => collection.doc(note.id).set({pin: !!note.pin, text: note.text, time: new Date()}, {merge:true});

const togglePin = (note) => update({...note, pin: !note.pin});

const deleteNote = (note) => collection.doc(note.id).delete();

// Do we want a Flux type arrangement here?
// What about pagination (infinite scroll style)? If a user has a lot of notes you don't really want to load them all.
export const NoteProvider = ({children}) => {
    const {user} = useContext(AuthContext);
    const [notes, setNotes] = useState();

    useEffect(() => {
        if (!user) return;

        const unsub = collection
            .where('owner', '==', user.uid)
            .orderBy('pin', 'desc')
            .orderBy('time', 'desc')
            .onSnapshot((snapshot) => setNotes(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))));

        return () => unsub();
    }, [user]);

    return <NoteContext.Provider value={{create: () => create(user), update, deleteNote, togglePin, notes}}>
        {children}
    </NoteContext.Provider>
};

export const useNotes = () => useContext(NoteContext);
