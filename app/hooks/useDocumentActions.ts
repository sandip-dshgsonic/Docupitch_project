'use client';

import { useRouter } from 'next/navigation';
import { deleteDocument } from '@/app/lib/api/documents';

export function useDocumentActions() {
  const router = useRouter();

  const handleCreate = () => {
    router.push('/documents/new');
  };

  const handleEdit = (id: string) => {
    router.push(`/documents/${id}/edit`);
  };

  const handleShare = (id: string) => {
    router.push(`/documents/${id}/share`);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this document?')) {
      await deleteDocument(id);
      router.refresh();
    }
  };

  return {
    handleCreate,
    handleEdit,
    handleShare,
    handleDelete,
  };
}