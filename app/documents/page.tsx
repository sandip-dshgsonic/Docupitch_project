'use client';

import { Container } from '@mui/material';
import DocumentList from '@/app/components/documents/DocumentList';
import DocumentToolbar from '@/app/components/documents/DocumentToolbar';
import { DocumentProvider } from '@/app/context/DocumentContext';

export default function DocumentsPage() {
  return (
    <DocumentProvider>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <DocumentToolbar />
        <DocumentList />
      </Container>
    </DocumentProvider>
  );
}