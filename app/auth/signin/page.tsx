'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { 
  Container, 
  Paper, 
  Typography, 
  TextField, 
  Button, 
  Divider, 
  Box 
} from '@mui/material';
import { Google, LinkedIn } from '@mui/icons-material';
import { AuthForm } from '@/app/components/auth/AuthForm';
import { SocialButtons } from '@/app/components/auth/SocialButtons';

export default function SignIn() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleEmailSignIn = async (email: string, password: string) => {
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError('Invalid credentials');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Sign In
        </Typography>
        
        <AuthForm onSubmit={handleEmailSignIn} error={error} />
        
        <Box sx={{ my: 2 }}>
          <Divider>OR</Divider>
        </Box>
        
        <SocialButtons />
      </Paper>
    </Container>
  );
}