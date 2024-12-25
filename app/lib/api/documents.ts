import { Document } from '@/app/types/document';

const API_BASE = '/api/documents';

export async function fetchDocuments(): Promise<Document[]> {
  const response = await fetch(API_BASE);
  if (!response.ok) throw new Error('Failed to fetch documents');
  return response.json();
}

export async function fetchDocument(id: string): Promise<Document> {
  const response = await fetch(`${API_BASE}/${id}`);
  if (!response.ok) throw new Error('Failed to fetch document');
  return response.json();
}

export async function createDocument(data: Partial<Document>): Promise<Document> {
  const response = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to create document');
  return response.json();
}

export async function updateDocument(id: string, data: Partial<Document>): Promise<Document> {
  const response = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to update document');
  return response.json();
}

export async function deleteDocument(id: string): Promise<void> {
  const response = await fetch(`${API_BASE}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete document');
}