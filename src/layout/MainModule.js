import React from 'react';

import { NoteProvider } from '../context/NoteContext';

import { MainWithNotes } from '../component/MainWithNotes';

const MainModule = () => (
    <NoteProvider>
        <MainWithNotes />
    </NoteProvider>
);

export default MainModule;
