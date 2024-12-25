'use client';

import { Button, Stack } from '@mui/material';
import { Google, LinkedIn } from '@mui/icons-material';
import { signIn } from 'next-auth/react';

export function SocialButtons() {
  return (
    <Stack spacing={2}>
      <Button
        fullWidth
        variant="outlined"
        startIcon={<Google />}
        onClick={() => signIn('google')}
      >
        Continue with Google
      </Button>
      
      <Button
        fullWidth
        variant="outlined"
        startIcon={<LinkedIn />}
        onClick={() => signIn('linkedin')}
      >
        Continue with LinkedIn
      </Button>
    </Stack>
  );
}