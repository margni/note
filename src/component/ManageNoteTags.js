import React from 'react';

import { ContextMenu } from './ContextMenu';
import { NewTag } from './NewTag';
import { NoteTagList } from './NoteTagList';
import { TagList } from './TagList';

// TODO Keyboard, when menu opened if you start typing focus on the input input.
// TODO Note using this model when you unselect the last instance of a tag it will immediately disappear, undecided if this is good or bad.
// TODO Maybe having a tag collection would actually be better?
// TODO The collection could just be a single document for each user with all their tags and potentially usage stats.
// TODO Note if you try to add a new tag which you already have it will be removed instead, not sure if this is bad?
export const ManageNoteTags = ({
    menuOpen,
    note,
    onToggleMenu,
    onToggleTag,
    tags,
}) => (
    <>
        <NoteTagList note={note} />
        <ContextMenu
            name="tag"
            open={menuOpen}
            onToggle={onToggleMenu}
            primary={false}
            width="narrow"
        >
            <NewTag onSaveTag={(tag) => onToggleTag(tag)} />
            <TagList
                selectedTags={note.tags}
                onToggleTag={onToggleTag}
                tags={tags}
            />
        </ContextMenu>
    </>
);
