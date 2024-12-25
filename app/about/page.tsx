'use client';

import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import { Security, Speed, GroupWork, CloudUpload } from '@mui/icons-material';

export default function AboutPage() {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/images/about-bg.jpg")',
        backgroundSize: 'cover',
        minHeight: '100vh',
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
            About DocuPitch
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Security color="primary" /> Secure Document Management
                </Typography>
                <Typography>
                  Enterprise-grade security with end-to-end encryption and advanced access controls.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Speed color="primary" /> Real-time Collaboration
                </Typography>
                <Typography>
                  Work together in real-time with team members, track changes, and manage versions.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <GroupWork color="primary" /> Team Workspace
                </Typography>
                <Typography>
                  Create team workspaces, manage permissions, and organize documents efficiently.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <CloudUpload color="primary" /> Smart Upload
                </Typography>
                <Typography>
                  AI-powered document processing with automatic categorization and insights.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}