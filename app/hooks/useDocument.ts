'use client';

import { useState, useEffect } from 'react';
import { Document } from '@/app/types/document';
import { fetchDocument } from '@/app/lib/api/documents';

export function useDocument(id: string) {
  const [document, setDocument] = useState<Document | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDocument = async () => {
      try {
        const doc = await fetchDocument(id);
        setDocument(doc);
      } catch (error) {
        console.error('Error loading document:', error);
      } finally {
        setLoading(false);
      }
    };

    loadDocument();
  }, [id]);

  return { document, loading };
}