'use client';

import { useDocuments } from '@/app/hooks/useDocuments';
import { Grid } from '@mui/material';
import DocumentCard from './DocumentCard';
import DocumentSkeleton from './DocumentSkeleton';

export default function DocumentList() {
  const { documents, loading } = useDocuments();

  if (loading) {
    return (
      <Grid container spacing={3}>
        {[1, 2, 3].map((n) => (
          <Grid item xs={12} sm={6} md={4} key={n}>
            <DocumentSkeleton />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid container spacing={3}>
      {documents.map((doc) => (
        <Grid item xs={12} sm={6} md={4} key={doc.id}>
          <DocumentCard document={doc} />
        </Grid>
      ))}
    </Grid>
  );
}