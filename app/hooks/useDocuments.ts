'use client';

import { useState, useEffect } from 'react';
import { Document } from '@/app/types/document';
import { fetchDocuments } from '@/app/lib/api/documents';

export function useDocuments() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDocuments = async () => {
      try {
        const docs = await fetchDocuments();
        setDocuments(docs);
      } catch (error) {
        console.error('Error loading documents:', error);
      } finally {
        setLoading(false);
      }
    };

    loadDocuments();
  }, []);

  return { documents, loading };
}