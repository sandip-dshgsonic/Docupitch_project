'use client';

import { Button, Stack, TextField } from '@mui/material';
import { Add, Search } from '@mui/icons-material';
import { useDocumentActions } from '@/app/hooks/useDocumentActions';

export default function DocumentToolbar() {
  const { handleCreate } = useDocumentActions();

  return (
    <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
      <TextField
        placeholder="Search documents..."
        size="small"
        InputProps={{
          startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />,
        }}
        sx={{ flexGrow: 1 }}
      />
      <Button
        variant="contained"
        startIcon={<Add />}
        onClick={handleCreate}
      >
        New Document
      </Button>
    </Stack>
  );
}