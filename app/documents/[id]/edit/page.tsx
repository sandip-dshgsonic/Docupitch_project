'use client';

import { useEffect, useState } from 'react';
import { Container, Paper } from '@mui/material';
import DocumentEditor from '@/app/components/editor/DocumentEditor';
import DocumentToolbar from '@/app/components/editor/DocumentToolbar';
import { useDocument } from '@/app/hooks/useDocument';
import { EditorProvider } from '@/app/context/EditorContext';

export default function EditDocumentPage({ params }: { params: { id: string } }) {
  const { document, loading } = useDocument(params.id);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <EditorProvider>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper sx={{ p: 2 }}>
          <DocumentToolbar document={document} />
          <DocumentEditor document={document} />
        </Paper>
      </Container>
    </EditorProvider>
  );
}