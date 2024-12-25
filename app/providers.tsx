'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <MUIThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </NextThemesProvider>
  );
}