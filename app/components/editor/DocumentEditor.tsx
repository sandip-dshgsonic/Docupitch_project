'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Collaboration from '@tiptap/extension-collaboration';
import CollaborationCursor from '@tiptap/extension-collaboration-cursor';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { useEffect } from 'react';
import { Document } from '@/app/types/document';
import { useSession } from 'next-auth/react';
import { useEditorContext } from '@/app/context/EditorContext';

interface DocumentEditorProps {
  document: Document;
}

export default function DocumentEditor({ document }: DocumentEditorProps) {
  const { data: session } = useSession();
  const { setEditor: setContextEditor } = useEditorContext();

  const editor = useEditor({
    extensions: [
      StarterKit,
      Collaboration.configure({
        document: new Y.Doc(),
        field: 'content',
      }),
      CollaborationCursor.configure({
        provider: new WebsocketProvider(
          'ws://localhost:1234',
          document.id,
          new Y.Doc()
        ),
        user: {
          name: session?.user?.name || 'Anonymous',
          color: '#' + Math.floor(Math.random()*16777215).toString(16),
        },
      }),
    ],
    content: document.content,
    autofocus: true,
    editable: true,
  });

  useEffect(() => {
    if (editor) {
      setContextEditor(editor);
    }
  }, [editor, setContextEditor]);

  return (
    <div className="prose max-w-none">
      <EditorContent editor={editor} />
    </div>
  );
}