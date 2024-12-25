'use client';

import { createContext, useContext, ReactNode } from 'react';
import { Document } from '@/app/types/document';

interface DocumentContextType {
  documents: Document[];
  setDocuments: (documents: Document[]) => void;
}

const DocumentContext = createContext<DocumentContextType | undefined>(undefined);

export function DocumentProvider({ children }: { children: ReactNode }) {
  const [documents, setDocuments] = useState<Document[]>([]);

  return (
    <DocumentContext.Provider value={{ documents, setDocuments }}>
      {children}
    </DocumentContext.Provider>
  );
}

export function useDocumentContext() {
  const context = useContext(DocumentContext);
  if (context === undefined) {
    throw new Error('useDocumentContext must be used within a DocumentProvider');
  }
  return context;
}