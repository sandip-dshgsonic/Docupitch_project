'use client';

import { Stack, Button, IconButton, Tooltip } from '@mui/material';
import {
  FormatBold,
  FormatItalic,
  FormatListBulleted,
  FormatListNumbered,
  Undo,
  Redo,
} from '@mui/icons-material';
import { useEditorContext } from '@/app/context/EditorContext';
import { Document } from '@/app/types/document';

interface DocumentToolbarProps {
  document: Document;
}

export default function DocumentToolbar({ document }: DocumentToolbarProps) {
  const { editor } = useEditorContext();

  if (!editor) {
    return null;
  }

  return (
    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
      <Tooltip title="Bold">
        <IconButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <FormatBold />
        </IconButton>
      </Tooltip>
      
      <Tooltip title="Italic">
        <IconButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          <FormatItalic />
        </IconButton>
      </Tooltip>

      <Tooltip title="Bullet List">
        <IconButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          <FormatListBulleted />
        </IconButton>
      </Tooltip>

      <Tooltip title="Numbered List">
        <IconButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          <FormatListNumbered />
        </IconButton>
      </Tooltip>

      <Tooltip title="Undo">
        <IconButton
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
        >
          <Undo />
        </IconButton>
      </Tooltip>

      <Tooltip title="Redo">
        <IconButton
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
        >
          <Redo />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}