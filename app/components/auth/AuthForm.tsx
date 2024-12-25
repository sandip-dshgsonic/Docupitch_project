'use client';

import { useState } from 'react';
import { TextField, Button, Alert } from '@mui/material';

interface AuthFormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
  error?: string;
}

export function AuthForm({ onSubmit, error }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      
      <TextField
        fullWidth
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
        required
      />
      
      <TextField
        fullWidth
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        required
      />
      
      <Button
        fullWidth
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Sign In
      </Button>
    </form>
  );
}