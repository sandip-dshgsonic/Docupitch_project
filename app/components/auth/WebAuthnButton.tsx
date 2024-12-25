'use client';

import { Button } from '@mui/material';
import { Fingerprint } from '@mui/icons-material';
import { startAuthentication } from '@simplewebauthn/browser';

export function WebAuthnButton() {
  const handleWebAuthn = async () => {
    try {
      const response = await fetch('/api/auth/webauthn/generate-options');
      const options = await response.json();
      
      const credential = await startAuthentication(options);
      
      const verificationResponse = await fetch('/api/auth/webauthn/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credential),
      });
      
      if (verificationResponse.ok) {
        // Handle successful authentication
      }
    } catch (error) {
      console.error('WebAuthn error:', error);
    }
  };

  return (
    <Button
      fullWidth
      variant="outlined"
      startIcon={<Fingerprint />}
      onClick={handleWebAuthn}
    >
      Sign in with Passkey
    </Button>
  );
}